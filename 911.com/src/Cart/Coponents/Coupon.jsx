import React from 'react'
import {
    Box,
    Image,
    Text,
    Button,
    ButtonGroup,
    Checkbox
  } from "@chakra-ui/react";
  import { ChevronRightIcon,InfoOutlineIcon,LockIcon } from "@chakra-ui/icons";

function Coupon() {
  return (
    <div>
        <Box>
     {/* Coupon section */}
     <Box mt="16px" shadow="0 1px 2px 0 rgb(0 0 0 / 20%)" borderRadius="2px" >
            <Box
              w="449px"
              bg="#fff"
              textAlign="left"
             
              borderRadius="2px"
            >
              <Box
                w="449px"
                py="12px"
                px="16px"
                borderBottom="1px solid #c7c7c7"
              >
                <Image
                  src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
                  w="90px"
                />
                <Box padding="4px 0px">
                  <Text color="#208376" fontSize="16px" fontWeight={700}>
                    You can save extra ₹6 on this order
                  </Text>
                  <Text
                    color="#5b5353"
                    fontSize="12px"
                    lineHeight="1.6"
                    fontWeight={700}
                  >
                    Become a member
                  </Text>
                  <Text color="#5b5353" fontSize="12px" lineHeight="1.6">
                    Care plan membership ₹165{" "}
                    <Text as="s" textDecoration="">
                      ₹549
                    </Text>{" "}
                    / 3 months
                  </Text>
                  <Box mt="15px" fontWeight="700">
                    <ButtonGroup w="full" gap="6">
                      <Button
                        w="100%"
                        h="35px"
                        colorScheme="red"
                        variant="outline"
                        padding="6px 20px"
                      >
                        Know More
                      </Button>
                      <Button
                        w="100%"
                        h="35px"
                        colorScheme="red"
                        variant="solid"
                        padding="6px 20px"
                      >
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                cursor="pointer"
                padding="12px 16px"
              >
                <Box display="flex">
                  <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" />
                  <Box
                    fontSize="14px"
                    fontWeight="700"
                    w="110px"
                    ml="10px"
                    color="#2b2b2b"
                  >
                    <Text as="h4">Apply Coupon</Text>
                  </Box>
                </Box>

                <Box w="25px" h="25px" borderRadius="full" bg="#e2e2e2">
                  <ChevronRightIcon boxSize={6} />
                </Box>
              </Box>

              <Box></Box>
            </Box>
          </Box>
     
{/* Check health section */}

<Box mt="16px" shadow="0 1px 2px 0 rgb(0 0 0 / 20%)" borderRadius="2px">
  <Box
    w="449px"
    bg="#fff"
    textAlign="left"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      cursor="pointer"
      padding="12px 16px"
      bg="#fffcf8"
    >
      <Box display="flex">
        <Box
          fontSize="16px"
          fontWeight="500"
          ml="10px"
          color="#2b2b2b"
        >
          <Text as="h4">Check the health of your vital organs</Text>
        </Box>
      </Box>

      <Box>
        <InfoOutlineIcon boxSize={6} />
      </Box>
    </Box>
    <Box
      w="449px"
      pt="12px"
      px="16px"
    >
      <Box padding="4px 0px">
      <Checkbox size='lg' colorScheme='red' >
          <Text fontSize="14px" color="rgba(33,33,33,.87)">Book Good Health Silver Package for just ₹649</Text>
      
</Checkbox>
<Box ml="30px" mb="6px" fontSize="12px" lineHeight="18px" maxWidth="70%" >
<Text color="#616161" >
        Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.

        </Text>
        <Text color="#1aab2a">Pay later on home sample collection</Text>

</Box>
        
      </Box>
    </Box>
  </Box>
</Box>

{/* Neuo coins */}

<Box mt="16px" borderRadius="2px">
  <Box
    w="449px"
    bg="#fff"
    textAlign="left"
    borderRadius="2px"
    px="12px"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      cursor="pointer"
      py="12px"
      borderBottom="1px solid #c7c7c7"
      
    >
        <Box display="flex" alignItems="center" >
        <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png" w="36px" h="36px"/>
        <Text fontSize="16px" color="#333" fontWeight={600}>My NeuCoins</Text>

        </Box>

        <Box display="flex" alignItems="center" fontSize="11px" color="#767676" >
        
        <Text>Balance: <b>0 NeuCoin</b> </Text>

        </Box>
        
      
    </Box>
    <Box
      w="449px"
      pt="12px"
      pb="20px"
      px="16px"
    >
        <Text fontWeight="400"> <Text as="span" fontSize="20px" fontWeight="600">1.28</Text> NeuCoins <Text as="span" fontSize="12px">to be earned on this order*</Text></Text>
        <Box display="flex" textAlign="center">
            <Box display="flex" alignItems="center" bg="#ffe0ccFF" padding="4px" mt="3px">
            <LockIcon color="#8a2422" boxSize={3}/>
            <Text color="#8a2422" fontSize="11px" fontWeight="600" ml="8px">Extra 6.4 NeuCoins for care Plan members</Text>

            </Box>
            <Box ml="4px">
                <InfoOutlineIcon boxSize={3} />
            </Box>
            
        </Box>
        <Text color="#ff6f61" fontSize="14px" mt="16px" fontWeight="600" cursor="pointer">Add care plan to cart</Text>

    </Box>
  </Box>
</Box>

</Box>
    </div>
  )
}

export default Coupon