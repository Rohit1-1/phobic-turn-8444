import { Box, Button, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import HealthAllProCard from "../components/Health/HealthAllProductCard";
import BrandsCard from "../components/Health/HealthBrandCard";
import {
  AllProducts,
  Shopbyhealthconcerns,
  topSellingProducts,
} from "../components/Health/HealthData";
import ProductsCard from "../components/Health/HealthProductsCard";
import Navbar from "../components/Navbar";
// import BrandsCard from "../components/HealthBrandCard";
// import { Shopbyhealthconcerns, topSellingProducts } from "../components/HealthData";

// import ProductsCard from "../components/HealthProductCard";

export const HealthPage = () => {
  return (
    <>
      <Navbar />

      <Box>
        {/* <Carosel /> */}

        <Box bg="#f6f6f6">
          {/* Top image */}
          <Text
            textAlign="center"
            fontSize={{ base: "16px", md: "24px", lg: "26px" }}
            fontWeight="650"
            letterSpacing={{ base: "2px" }}
            mt={{ base: "15px", md: "30px", lg: "7%" }}
          >
            HEALTH CONDITIONS
          </Text>
          <Box p="1rem">
            <Image
              w="95%"
              m="auto"
              src="https://onemg.gumlet.io/bc34f793-f75d-4d58-a11a-80345cc47ec2_1671167727.jpg?w=1062&h=124&format=auto"
            />
          </Box>
          <Box mt="2rem">
            <Box
              display="flex"
              w="85%"
              margin="auto"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                Shop by concerns
              </Text>
              <Link
                href="http://localhost:3000/products"
                target="_blank"
                textDecoration="none"
              >
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
            <BrandsCard something={Shopbyhealthconcerns} />
          </Box>

          <Box mt="2rem">
            <Box
              w="85%"
              margin="auto"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="0.5rem"
            >
              <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                Cough & Cold
              </Text>
              <Link
                href="http://localhost:3000/allProducts"
                target="_blank"
                textDecoration="none"
              >
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
            <ProductsCard something={topSellingProducts} />
          </Box>

          <Box mt="2rem">
            <Box
              w="85%"
              margin="auto"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="0.5rem"
            >
              <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                All Products
              </Text>
              <Link
                href="http://localhost:3000/allProducts"
                target="_blank"
                textDecoration="none"
              >
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
            <HealthAllProCard something={AllProducts} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
