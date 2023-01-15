import React from "react";
import { useState } from "react";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import style from "../styles/Footer.module.css";

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box>
      <Box>
        <Box>
          <h2 className={style.statheading}>
            INDIA’S LARGEST HEALTHCARE PLATFORM
          </h2>
        </Box>
        <Box className={style.statbox}>
          <div>
            <Box className={style.stats}>260m+</Box>
            <Text className={style.text}>Visitors</Text>
          </div>
          <div>
            <Box className={style.stats}>31m+</Box>
            <Text className={style.text}>Orders Delivered</Text>
          </div>
          <div>
            <Box className={style.stats}>1800+</Box>
            <Text className={style.text}>Cities</Text>
          </div>
        </Box>
        <hr className={style.hr} />
      </Box>

      <Box className={style.link_box}>
        <Box className={style.flex_al_cntr} width="45%">
          Get the link to download App
        </Box>
        <Box width="45%">
          <input
            className={style.input}
            width="70%"
            placeholder="Enter Phone Number"
          />
          <button className={style.button}>Send link</button>
        </Box>
      </Box>

      <hr style={{ marginTop: "3rem" }} />

      <Box bgColor="#ffcf8">
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: "20px", md: "none" }}
          width="90%"
          margin="auto"
          marginTop="1.5rem"
          marginBottom="2rem"
        >
          <Box className={style.alinleft}>
            <h3 className={style.f_heading}>Know Us</h3>
            <Text className={style.f_text}>About Us</Text>
            <Text className={style.f_text}>Contact Us</Text>
            <Text className={style.f_text}>Press Coverage</Text>
            <Text className={style.f_text}>Careers</Text>
            <Text className={style.f_text}>Business Partnership</Text>
            <Text className={style.f_text}>Become a Health Partner</Text>
            <Text className={style.f_text}>Corporate Governance</Text>
          </Box>

          <Box className={style.alinleft}>
            <h3 className={style.f_heading}>Our Policies</h3>
            <Text className={style.f_text}>Privacy Policy</Text>
            <Text className={style.f_text}>Terms and Conditions</Text>
            <Text className={style.f_text}>Editorial Policy</Text>
            <Text className={style.f_text}>Return Policy</Text>
            <Text className={style.f_text}>IP Policy</Text>
            <Text className={style.f_text}>Grievance Redressal Policy</Text>
            <Text className={style.f_text}>Fake Jobs and Fraud Disclaimer</Text>
          </Box>

          <Box className={style.alinleft}>
            <h3 className={style.f_heading}>Our Services</h3>
            <Text className={style.f_text}>Order Medicines</Text>
            <Text className={style.f_text}>Book Lab Tests</Text>
            <Text className={style.f_text}>Consult a Doctor</Text>
            <Text className={style.f_text}>Ayurveda Articles</Text>
            <Text className={style.f_text}>Hindi Articles</Text>
            <Text className={style.f_text}>Care Plan</Text>
          </Box>

          <Box className={style.alinleft}>
            <h3 className={style.f_heading}>Connect</h3>
            <Text fontSize="md">About Us</Text>
            <HStack>
              <div className={style.facebook}></div>
              <div className={style.instagram}></div>
              <div className={style.twitter}></div>
              <div className={style.youtube}></div>
              <div className={style.linkedin}></div>
              <div className={style.medium}></div>
            </HStack>
          </Box>

          <Box className={style.alinleft}>
            <h3 className={style.f_heading}>Download App</h3>
            <div className={style.googleplay}>
              <img
                src="https://www.bbassets.com/static/v2608/custPage/build/content/img/Google-App-store-icon.png"
                alt="logo"
              />
            </div>

            <div>
              <img
                src="https://www.bbassets.com/static/v2608/custPage/build/content/img/Apple-App-store-icon.png"
                alt="logo"
              />
            </div>
          </Box>
        </Stack>
        <hr className={style.hr} />

        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: "20px", md: "none" }}
          width="90%"
          margin="auto"
          marginTop="1.5rem"
          marginBottom="2rem"
        >
          <Box>
            <HStack>
              <Box>
                <div className={style.reliable}></div>
              </Box>
              <Box className={style.text_alin_left}>
                <h2 className={style.secure_heading}>Reliable</h2>
                <Text className={style.f_textsecnd}>
                  All products displayed on 911.com are procured from verified
                  and licensed pharmacies. All labs listed on the platform are
                  accredited
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Box>
                <div className={style.secure}></div>
              </Box>
              <Box className={style.text_alin_left}>
                <h2 className={style.secure_heading}>Secure</h2>
                <Text className={style.f_textsecnd}>
                  911.com uses Secure Sockets Layer (SSL) 128-bit encryption and
                  is Payment Card Industry Data Security Standard (PCI DSS)
                  compliant
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Box>
                <div className={style.affordable}></div>
              </Box>

              <Box className={style.text_alin_left}>
                <h2 className={style.secure_heading}>Affordable</h2>
                <Text className={style.f_textsecnd}>
                  Find affordable medicine substitutes, save up to 50% on health
                  products, up to 80% off on lab tests and free doctor
                  consultations.
                </Text>
              </Box>
            </HStack>
          </Box>
        </Stack>
        <hr className={style.hr} />

        <Box marginBottom={8}>
          <HStack
            display="flex"
            justifyContent="center"
            width="50%"
            margin="auto"
          >
            <Box width="18%">
              <Image
                className={style.f_img}
                src="https://static.legitscript.com/seals/729605.png"
                alt="logo"
              />
            </Box>
            <Box width="18%">
              <Image
                className={style.f_img}
                src="https://onemg.gumlet.io/URS_ebgmxc.png"
                alt="logo"
              />
            </Box>
          </HStack>

          <Box width="50%" margin="auto" marginTop="1rem">
            <Text fontSize="1.1rem" fontWeight={700}>
              India's only LegitScript and ISO/27001 certified online healthcare
              platform
            </Text>
          </Box>
        </Box>

        <Box>
          <hr />
          <Box
            onClick={handleClick}
            width="90%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={3}
          >
            <Text
              fontSize="1.1rem"
              fontWeight={700}
              className={style.f_heading}
            >
              Know more about 911.com
            </Text>
            {!show ? (
              <ChevronDownIcon fontSize="26px" />
            ) : (
              <ChevronUpIcon fontSize="26px" />
            )}
          </Box>
          <hr />
        </Box>

        <Box width="90%" margin="auto" display={show ? "block" : "none"}>
          <VStack>
            <Box className={style.text_alin_left} marginTop={4}>
              <Text fontSize="1rem" fontWeight={700}>
                Access medical and health information
              </Text>
              <Text className={style.f_textsecnd}>
                911.com provides you with medical information which is curated,
                written and verified by experts, accurate and trustworthy. Our
                experts create high-quality content about medicines, diseases,
                lab investigations, Over-The-Counter (OTC) health products,
                Ayurvedic herbs/ingredients, and alternative remedies.
              </Text>
            </Box>

            <Box className={style.text_alin_left}>
              <Text fontSize="1rem" fontWeight={700}>
                Order medicines online
              </Text>
              <Text className={style.f_textsecnd}>
                Get free medicine home delivery in over 1800 cities across
                India. You can also order Ayurvedic, Homeopathic and other
                Over-The-Counter (OTC) health products. Your safety is our top
                priority. All products displayed on 911.com are procured from
                verified and licensed pharmacies.
              </Text>
            </Box>

            <Box className={style.text_alin_left}>
              <Text fontSize="1rem" fontWeight={700}>
                Book lab tests
              </Text>
              <Text className={style.f_textsecnd}>
                Book any lab tests and preventive health packages from certified
                labs and get tested from the comfort of your home. Enjoy free
                home sample collection, view reports online and consult a doctor
                online for free.
              </Text>
            </Box>

            <Box className={style.text_alin_left} marginBottom={4}>
              <Text fontSize="1rem" fontWeight={700}>
                Consult a doctor online
              </Text>
              <Text className={style.f_textsecnd}>
                Got a health query? Consult doctors online from the comfort of
                your home for free. Chat privately with our registered medical
                specialists to connect directly with verified doctors. Your
                privacy is guaranteed.
              </Text>
            </Box>
          </VStack>
        </Box>
        {show ? <hr className={style.hr} /> : null}
        <Box width="90%" margin="auto" display="flex" alignItems="center">
          <Box>
            <Text className={style.copyright}>
              © 2022 911.com. All rights reserved. In compliance with Drugs and
              Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
              process requests for Schedule X and other habit forming drugs.
            </Text>
          </Box>
          <Box width="20%">
            <Image
              width="100%"
              src="https://images.bewakoof.com/web/secure-payments-image.png"
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
