import { Box, Button, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import PersonalAllProCard from "../components/Personal/PersonalAllProPage";
import { PAllProducts, PersonalFeaturedBrands, personalPopularCategories, topSellingProducts } from "../components/Personal/PersonalData";
import { PersonalPopularcategoriesCard } from "../components/Personal/PersonalPopularCategories";
import { PersonalProductsCard } from "../components/Personal/PersonalProductCard";
import Navbar from "../components/Navbar";



export const PersonalCarePage = () => {


    return (
        <>
         <Navbar/>
       
        <Box>

            <Box bg="#f6f6f6">
               
                <Text textAlign='center' fontSize={{ base: '16px', md: '24px', lg: '26px' }} fontWeight='650' letterSpacing={{ base: '2px' }} mt={{ base: '15px', md: '30px', lg: '7%' }}>Personal Care</Text>
                <Box p="1rem">
                    <Image
                        w="95%"
                        m="auto"
                        src="https://onemg.gumlet.io/ecb4550b-b2c3-415b-9cda-e7a3b093a699_1667820580.jpg?w=1062&format=auto"
                    />
                </Box>




                <Box mt="2rem">
                    <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
                        <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                            Shop By categories
                        </Text>
                        <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none">
                            <Button
                                bgColor="#ff6f61"
                                _hover={{ bg: "#ff6f61" }}
                                width="fit-content"
                                color="white"
                                borderColor="transparent"
                                borderRadius="5px"
                                cursor="pointer"
                                padding="10px"
                            >
                                SEE ALL
                            </Button>
                        </Link>
                    </Box>
                    <PersonalPopularcategoriesCard something={personalPopularCategories} />
                </Box>


                <Box mt="2rem">
                    <Box w="85%" margin="auto"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb="0.5rem"
                    >
                        <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                            Top deals
                        </Text>
                        <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none">
                            <Button
                                bgColor="#ff6f61"
                                _hover={{ bg: "#ff6f61" }}
                                width="fit-content"
                                color="white"
                                borderColor="transparent"
                                borderRadius="5px"
                                cursor="pointer"
                                padding="10px"
                            >
                                SEE ALL
                            </Button>
                        </Link>
                    </Box>
                    <PersonalProductsCard something={topSellingProducts} />
                </Box>


                <Box p="1rem">
                    <Image
                        w="95%"
                        m="auto"
                        src="https://onemg.gumlet.io/4f71521c-6e61-4379-a572-7b41501ea4fd_1667586600.png?w=1062&h=124&format=auto"
                    />
                </Box>



                <Box mt="2rem">
                    <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
                        <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                        Ayurveda personal care store
                        </Text>
                        <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none">
                            <Button
                                bgColor="#ff6f61"
                                _hover={{ bg: "#ff6f61" }}
                                width="fit-content"
                                color="white"
                                borderColor="transparent"
                                borderRadius="5px"
                                cursor="pointer"
                                padding="10px"
                            >
                                SEE ALL
                            </Button>
                        </Link>
                    </Box>
                    <PersonalPopularcategoriesCard something={PersonalFeaturedBrands} />
                </Box>

                <Box p="1rem">
                    <Image
                        w="95%"
                        m="auto"
                        src="https://onemg.gumlet.io/0b0edb6c-3ed7-4783-82cc-95459d2c7876_1670212948.jpg?w=1062&h=124&format=auto"
                    />
                </Box>
           

                <Box mt="2rem">
              <Box w="85%" margin="auto"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="0.5rem"
              >
                <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                All Products
                </Text>
                <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none">
                  <Button
                    bgColor="#ff6f61"
                    _hover={{ bg: "#ff6f61" }}
                    width="fit-content"
                    color="white"
                    borderColor="transparent"
                    borderRadius="5px"
                    cursor="pointer"
                    padding="10px"
                  >
                    SEE ALL
                  </Button>
                </Link>
              </Box>
              <PersonalAllProCard something={PAllProducts} />
            </Box>

            </Box>
        </Box>
        </>
    );
};