

import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import BrandsCard from "../cards/BrandCard";
import CalciumCard from "../cards/CalciumCard";
import CheckupCard from "../cards/CheckupCard";
import ComboCard from "../cards/ComboCard";
import DealsCard from "../cards/DealsCard";
import Description from "../cards/Description";
import LozengesCard from "../cards/LozengesCard";
import Popularcategories from "../cards/PopularcategoriesCard";
import ProductsCard from "../cards/ProductsCard";
import SpotlightCard from "../cards/SpotlightCard";
import SugarSubstitutesCard from "../cards/SugarSubstitutesCard";
import TrendingCard from "../cards/TrendingCard";
import Carosel from "../crousel/crousel";
import {
  Calcium,
  datalist,
  Deals,
  FeaturedBrands,
  health,
  Lozenges,
  popularCategories,
  PopularCombo,
  Shopbyhealthconcerns,
  Spotlight,
  Sugarsubstitutes,
  topSellingProducts,
  Trending,
  WinterCollection,
} from "../Data/products.data";
import Navbar from "../../Navbar";

const ALLProductsBrands = () => {
  return (
    <>
     <Navbar/>
   
    <Box>
      <Carosel />

      <Box bg="#f6f6f6">
        {/* Top image */}
        <Box p="1rem">
          <Image
            w="95%"
            m="auto"
            src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
          />
        </Box>
        <Box mt="2rem">
          <Box display="flex" w="85%" margin="auto" justifyContent="space-between" alignItems="center" >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Shop by health concerns
            </Text>
            <Link href="http://localhost:3000/products" target="_blank" textDecoration="none">
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
        <Box mt="2rem" >
          <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center" >
            <Text fontWeight={"600"} lineHeight={"26px"} fontSize={"20px"}>
              CheckUp cards
            </Text>
            <Link href="http://localhost:3000/products" target="_blank" textDecoration="none">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="100%"
                // height={"20px"}
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
          <Box>
            <CheckupCard something={datalist} />
          </Box>

        </Box>

        <Box mt="2rem">
          <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Popular categories
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
          <Popularcategories something={popularCategories} />
        </Box>
        <Box mt="2rem">
          <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Featured Brands
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
          <BrandsCard something={FeaturedBrands} />
        </Box>


        {/* Products */}

        <Box mt="2rem">
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Top Sellers From Ensure
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
          <ProductsCard something={topSellingProducts} />
        </Box>

        {/* SUGAR */}

        <Box mt="2rem" 
          // border="solid green 1px"
          >
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Sugar Substitutes
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none" >
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
          <SugarSubstitutesCard something={Sugarsubstitutes} />
        </Box>

        {/* brands */}

        <Box mt="2rem" >
          <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Featured Brands
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
          <BrandsCard something={health} />
        </Box>

        {/* Products */}

        <Box mt="2rem">
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Top Sellers From Ensure
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
          <ProductsCard something={topSellingProducts} />
        </Box>

        {/* Products */}


        <Box mt="2rem">
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Popular Combo Deals
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
          <ComboCard something={PopularCombo} />
        </Box>

        {/* brands */}

        <Box mt="2rem">
          <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Featured Brands
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
          <BrandsCard something={health} />
        </Box>

        {/* Products */}

        <Box mt="2rem">
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Top Sellers From Ensure
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
          <ProductsCard something={topSellingProducts} />
        </Box>

        {/* Diabetic medicines */}

        <Box mt="2rem" 
          // border="solid green 1px"
        >
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Diabetes medicines
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none" >
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
          <SugarSubstitutesCard something={Sugarsubstitutes} />
        </Box>

        {/* Winter Care */}

        <Box mt="2rem">
          <Box display="flex" w="85%" margin="auto" justifyContent="space-between" alignItems="center" >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Winter Care
            </Text>
            <Link href="http://localhost:3000/products" target="_blank" textDecoration="none">
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
          <BrandsCard something={WinterCollection} />
        </Box>

        {/* LOZENGES */}

        <Box mt="2rem" 
          // border="solid green 1px"
          >
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Lozenges
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none" >
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
          <LozengesCard something={Lozenges} />
        </Box>

        {/* In the Spotlight */}

        <Box mt="2rem" 
          // border="solid green 1px" 
        >
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              In the Spotlight
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none" >
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
          <SpotlightCard something={Spotlight} />
        </Box>

        {/* Calcium */}

        <Box mt="2rem" 
          // border="solid green 1px"
          >
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Calcium | supplement of the week
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none" >
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
          <CalciumCard something={Calcium} />
        </Box>


        {/* Featured Brands */}

        <Box mt="2rem">
          <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Featured Brands
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
          <BrandsCard something={FeaturedBrands} />
        </Box>


        {/* Trending */}


        <Box mt="2rem" 
          // border="solid green 1px"
        >
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Trending now
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none" >
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
          <TrendingCard something={Trending} />
        </Box>


        {/* Deals */}

        <Box mt="2rem" 
          // border="solid green 1px"
          >
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Deals of the day
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none" >
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
          <DealsCard something={Deals} />
        </Box>


        {/* Super Saving Deals (LOZENGES data) */}

        <Box mt="2rem" 
          // border="solid green 1px"
        >
          <Box w="85%" margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="0.5rem"
          >
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Super saving deals
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none" >
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
          <LozengesCard something={Lozenges} />
        </Box>


        {/* Description */}

        <Description />

        {/* Description */}
      </Box>
    </Box>
    </>
  );
};

export default ALLProductsBrands;