import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Dropdown = () => {
  return (
    <Box className={styles.dropdown_container}>
      <Flex gap={3} flexWrap="wrap" padding={0} justifyContent="center">
        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink>
              Health Resource Center <ChevronDownIcon boxSize={4} />
            </NavLink>
          </Box>

          <Box className={styles.hover_box} padding={4}>
            <NavLink className={styles.hover_box_category_heading}>
              All Medicines
            </NavLink>
            <NavLink
              to={"/alldisease"}
              className={styles.hover_box_category_heading}
            >
              All Diseases
            </NavLink>
            <NavLink className={styles.hover_box_category_heading}>
              Medicines by Therapeutic Class
            </NavLink>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink to={"/vitaminsproducts"} state={"immunity"}>
              <Text>
                Vitamins & Nutrition <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={styles.hover_box}>
            <Box display="flex" gap={3} padding="8px">
              <Box className={styles.hover_sub_category_box} border="none">
                <Box className={styles.border}>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_heading}
                  >
                    Vitamins & Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Multivitamins
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Vitamins A-Z
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Mineral Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Vitamin B12 & B Complex
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_heading}
                  >
                    Vitamins & Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Multivitamins
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Vitamins A-Z
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Mineral Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Vitamin B12 & B Complex
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_heading}
                  >
                    Vitamins & Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Multivitamins
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Vitamins A-Z
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Mineral Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Vitamin B12 & B Complex
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box}>
                <Box className={styles.border}>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_heading}
                  >
                    Protein Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Whey Protein
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Amino Acids
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Mass Gainers
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Workout Essential
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Fat Burners
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_heading}
                  >
                    Omega & Fish Oil
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Fish Oil
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Cod Liver Oil
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Flax Seed Oil
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_heading}
                  >
                    Immunity Boosters
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Chyawanprasha
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Vitamin C
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Herbal Teas
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Antioxidant Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Ayurvedic Supplements
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box_last}>
                <Box className={styles.border}>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_heading}
                  >
                    Specialty Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Plant based Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Beauty Supplements
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Pre and Probiotics
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Glucosamine
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Collagen
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Antioxidants
                  </NavLink>
                  <NavLink
                    to={"/vitaminsproducts"}
                    state={"immunity"}
                    className={styles.hover_box_category_text}
                  >
                    Biotin
                  </NavLink>
                </Box>

                <Box>
                  <NavLink className={styles.hover_box_category_heading}>
                    Weight Management
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Weight Management Herbs
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Meal Replacements
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Weight Gain
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink to={"/diabetesproduct"} state={"diabetes"}>
              <Text>
                Diabetes <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={styles.hover_box}>
            <Box display="flex" gap={3} padding="8px">
              <Box className={styles.hover_sub_category_box} border="none">
                <Box className={styles.border}>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_heading}
                  >
                    Diabetes Monitoring
                  </NavLink>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_text}
                  >
                    Blood Glucose Monitors
                  </NavLink>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_text}
                  >
                    Test Strips & Lancets
                  </NavLink>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_text}
                  >
                    Syringes & Pens
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_heading}
                  >
                    Sugar Free
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_heading}
                  >
                    Diabetic Medicines
                  </NavLink>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_text}
                  >
                    Vitamins, Minerals & Antioxidants
                  </NavLink>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_text}
                  >
                    Homeopathy Medicines
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box}>
                <Box className={styles.border}>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_heading}
                  >
                    Sugar Substitutes
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_heading}
                  >
                    Diabetic Diet
                  </NavLink>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_text}
                  >
                    Juices & Vinegars
                  </NavLink>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_text}
                  >
                    Diabetic Nutrition Supplements
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/diabetesproduct"}
                    state={"diabetes"}
                    className={styles.hover_box_category_heading}
                  >
                    Diabetic Foot Health
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink to={"/healthdevice"} state={"healthcareDevices"}>
              <Text>
                Healthcare Devices <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={styles.hover_box}>
            <Box display="flex" gap={3} padding="8px">
              <Box className={styles.hover_sub_category_box} border="none">
                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Top brands in Healthcare Devices
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    Dr. Morepen Devices
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    Accu-chek
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    OneTouch
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    Omron
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    Contour
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    Dr Trust
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    BP Monitors
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Oxygen Concentrators & Cans
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Weighing Scales
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    IR Thermometers
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Weighing Scales
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box}>
                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Masks (N95, Surgical and more)
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    Face Shield
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    Surgical Masks
                  </NavLink>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_text}
                  >
                    N95 Masks
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Nebulizers & Vaporizers
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Oximeters & Pedometers
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Vital Signs Monitors & Wearables
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Body Massager
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Diabetes Monitors
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/healthdevice"}
                    state={"healthcareDevices"}
                    className={styles.hover_box_category_heading}
                  >
                    Mobility Equipments
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Exercise Equipments
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Doctor's Corner
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Stethoscopes
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Tapes & Bandages
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Clinical Diagnostic Equipments
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Dressings & Wound Care
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box_last}>
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Supports & Braces
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Neck & Shoulder Support
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Knee & Leg Support
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Back & Abdomen Support
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Ankle & Foot Support
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Hand & Wrist Braces
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Arm & Elbow Support
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Cervical Pillows
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Compression support & sleeves
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Heel support
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Crepe Bandage
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink to={"/personalcare"} state={"skincare"}>
              <Text>
                Personal Care <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={styles.hover_box}>
            <Box display="flex" gap={3} padding="8px">
              <Box className={styles.hover_sub_category_box} border="none">
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Sexual Wellness
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Condoms
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Lubricants & Massage Gels
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Personal body massagers
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Vitamin B12 & B Complex
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Men Performance Enhancers
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Sexual Health Supplements
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/personalcareproducts/skincare"}
                    state={"skincare"}
                    className={styles.hover_box_category_heading}
                  >
                    Skin Care
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/skincare"}
                    state={"skincare"}
                    className={styles.hover_box_category_text}
                  >
                    Body Lotions
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/skincare"}
                    state={"skincare"}
                    className={styles.hover_box_category_text}
                  >
                    Mosquito Repellents
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/skincare"}
                    state={"skincare"}
                    className={styles.hover_box_category_text}
                  >
                    Lip Balm
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/skincare"}
                    state={"skincare"}
                    className={styles.hover_box_category_text}
                  >
                    Acne Care
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/skincare"}
                    state={"skincare"}
                    className={styles.hover_box_category_text}
                  >
                    Bath Essentials
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/skincare"}
                    state={"skincare"}
                    className={styles.hover_box_category_text}
                  >
                    Facewash
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/skincare"}
                    state={"skincare"}
                    className={styles.hover_box_category_text}
                  >
                    Sunscreen
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box}>
                <Box className={styles.border}>
                  <NavLink
                    to={"/personalcareproducts/babycare"}
                    state={"babycare"}
                    className={styles.hover_box_category_heading}
                  >
                    Baby Care
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/babycare"}
                    state={"babycare"}
                    className={styles.hover_box_category_text}
                  >
                    Baby & Infant Food
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/babycare"}
                    state={"babycare"}
                    className={styles.hover_box_category_text}
                  >
                    Baby Diapers, wipes & more
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/babycare"}
                    state={"babycare"}
                    className={styles.hover_box_category_text}
                  >
                    Nursing & Feeding
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/babycare"}
                    state={"babycare"}
                    className={styles.hover_box_category_text}
                  >
                    Baby Bath Essentials
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/babycare"}
                    state={"babycare"}
                    className={styles.hover_box_category_text}
                  >
                    Baby Skin Care
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/babycare"}
                    state={"babycare"}
                    className={styles.hover_box_category_text}
                  >
                    Baby Healthcare
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts/babycare"}
                    state={"babycare"}
                    className={styles.hover_box_category_text}
                  >
                    Baby Oral Health
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Hair Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Shampoo
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Hair Conditioners
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Hair Growth Supplements
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Hair Oils
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Hair Growth Products
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box_last}>
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Elderly Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Adult Diapers
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Bone & Joint Health
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Living & Safety Aids
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Orthopaedic Supports
                  </NavLink>
                </Box>

                <Box>
                  <NavLink className={styles.hover_box_category_heading}>
                    Women Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Feminine Hygiene
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Women Care Supplements
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Mother Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Polycystic Ovary Syndrome
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box_last}>
                <Box className={styles.border}>
                  <NavLink
                    to={"/personalcareproducts"}
                    state={"mens"}
                    className={styles.hover_box_category_heading}
                  >
                    Men Care
                  </NavLink>
                  <NavLink
                    to={"/personalcareproducts"}
                    state={"mens"}
                    className={styles.hover_box_category_text}
                  >
                    Men Grooming
                  </NavLink>
                </Box>

                <Box>
                  <NavLink className={styles.hover_box_category_heading}>
                    Oral Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Feminine Hygiene
                  </NavLink>
                </Box>

                <Box>
                  <NavLink className={styles.hover_box_category_heading}>
                    Pet Food
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Pet Health Care
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink>
              <Text>
                Health Conditions <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={`${styles.hover_box} ${styles.hover_box_breakpoint}`}>
            <Box display="flex" gap={3} padding="8px">
              <Box className={styles.hover_sub_category_box} border="none">
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Stomach Care
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Heart Care
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Bone, Joint & Muscle Care
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Pain Relief
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Heating Aids
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Omnigel products
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Eye Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Eye Lubricants
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Ear Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Hearing Aid Devices
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box}>
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    First Aid
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Liver Care
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Cold & Cough
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Fever
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Mental Wellness
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Kidney Care
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Respiratory Care
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Piles, Fissures & Fistula
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Smoking Cessation
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Derma Care
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink to={"/ayurveda"} state={"ayurvedic"}>
              <Text>
                Ayurveda Products <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={`${styles.hover_box} ${styles.ayurveda_box}`}>
            <Box display="flex" gap={3} padding="8px">
              <Box
                className={`${styles.hover_sub_category_box} `}
                border="none"
              >
                <Box className={styles.border}>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_heading}
                  >
                    Ayurveda Top Brands
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Dabur
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Sri Sri Tattva
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Kerala Ayurveda
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Jiva Ayurveda
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Chyawanparash
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Chyawanparash
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_heading}
                  >
                    Popular categories
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Herbal Juice
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Ayurvedic Immunity Boosters
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Explore Popular Herbs
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Herbal Supplements
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box}>
                <Box className={styles.border}>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_heading}
                  >
                    Top Health Concerns
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Ayurvedic Respiratory care
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Cough, Cold & Fever
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Sexual Wellness
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Bone, Joint and Muscle Care
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Stomach Care
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Diabetes Care.
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Liver Care
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Cardiac Care
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Mind Care
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box_last}>
                <Box className={styles.border}>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_heading}
                  >
                    Unani Medicines
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Hamdard Unani
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    AMU Dawakhana
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Rex Remedies
                  </NavLink>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_text}
                  >
                    Dehlvi Remedies
                  </NavLink>
                </Box>

                <Box>
                  <NavLink
                    to={"/ayurvedicproduct"}
                    state={"ayurvedic"}
                    className={styles.hover_box_category_heading}
                  >
                    Ayurvedic Medicine
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink>
              <Text>
                Homeopathy <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={`${styles.hover_box} ${styles.Homeopathy_box}`}>
            <Box display="flex" gap={3} padding="8px">
              <Box className={styles.hover_sub_category_box} border="none">
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Homeopathy Top Brands
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    SBL Homoeopathy
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Dr Reckeweg
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Dr Willmar Schwabe India
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Vitamin B12 & B Complex
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Dr Batra's
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Dr Bakshi Bakson
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Bhandari
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Boiron
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Medisynth
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Haslab
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Homeopathy Wellness Combos
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box_last}>
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Homeopathy Popular Categories
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Homeopathic Care for Cold & Cough
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Respiratory Wellness
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Homeopathy Covid Essentials
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Sexual Health
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Hair Care Products
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Skin Care Products
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Children's Health
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Women's Health
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Homeopathy Medicines
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Homeopathic Drops
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Dilutions
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Mother Tinctures
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Triturations
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Millesimal LM Potencies
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Biochemics
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Bach Flower Remedies
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={styles.main_category}>
            <NavLink>
              <Text>
                Featured <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={`${styles.hover_box} ${styles.Homeopathy_box}`}>
            <Box display="flex" gap={3} padding="8px">
              <Box className={styles.hover_sub_category_box} border="none">
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Winter Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Body & Skin Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Hair & Scalp Care
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Cough & Cold
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Fever & Headache
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Vaporizers & Nebulizers
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Heating Aid
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Winter Combos
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    TATA 1mg Health Products
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Trending now
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Trending now
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Buy More, Save More
                  </NavLink>
                </Box>
              </Box>

              <Box className={styles.hover_sub_category_box}>
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Minimum 33% Off
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Popular Combo Deals
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Deals of the Day
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Top Brands
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Accu-Chek
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Ensure
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Revital
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Scalpe
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Teddy
                  </NavLink>
                  <NavLink className={styles.hover_box_category_text}>
                    Pediasure
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Super savings
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className={styles.dropdown_category_hoverbox_container}>
          <Box className={`${styles.main_category}`}>
            <NavLink>
              <Text>
                Covid Essentials <ChevronDownIcon boxSize={4} />
              </Text>
            </NavLink>
          </Box>

          <Box className={`${styles.hover_box} ${styles.covid_box}`}>
            <Box display="flex" gap={3} padding="8px">
              <Box className={styles.hover_sub_category_box} border="none">
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Covid-19 Self test kits
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Oxygen Cans & Concentrators
                  </NavLink>
                </Box>

                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Masks
                  </NavLink>
                </Box>
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Sanitizers & Handwash Products
                  </NavLink>
                </Box>
                <Box className={styles.border}>
                  <NavLink className={styles.hover_box_category_heading}>
                    Support Your Immunity
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
