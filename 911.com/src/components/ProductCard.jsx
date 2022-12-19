import React from "react";
import axios from "axios"
import { useEffect,useState,useContext } from "react";
import {
  Box,
  Stack,
  Skeleton,
  Container,
  Alert,
  AlertIcon,
  AlertDescription,
  Grid,
  GridItem,
  Flex,
  Text,
  Image,
  Button,
  Badge,
  useToast,
  ButtonGroup,
  Select,
  
} from '@chakra-ui/react'

import { StarIcon } from "@chakra-ui/icons";

import style from '../styles/ProductCard.module.css'
const ProductCard = ({quantity,price2,price1,off,name,image,category,id}) => {
  const toast = useToast()
 

//   if(loading){
//     return (
//       <Stack my={20}>
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />
//         <Skeleton height="40px" />

//       </Stack>
//     )
//   }

//   if(error){
//     return (
//       <Container width={{base:"full", sm:"full", md:"container.xl", lg:"container.lg",}} centerContent={true}>
// <Alert status="error" py={{base:4, sm:4, md:4, lg:6 }} my={{base:24, sm:24, md:28, lg:40 }} px={{base:1, sm:1, md:4, lg:6 }}>
//   <AlertIcon/>
//   <AlertDescription>Something went wrong. Please refresh</AlertDescription>

// </Alert>
//       </Container>
//     )
//   }

//   const t = ( watch)=>{
//     return(
//       toast({
//         title: 'Product Added to Cart.',
        
//         status: 'success',
//         duration: 2000,
//         isClosable: true,
//       }),

//       dispatch(addToCart(watch))
//     )
//   }

  return (
    <div className={style.singlecard}>
       
    <div>
        <img style={{height:'11rem'}} src={image} alt={name} />
    </div>
    <div className={style.info_box}>
    <h4 textOverflow="ellipsis"
 className={style.title}>{name}</h4>
    <p className={style.category} >{category}</p>
    <div className={style.price_box}>
            <div className={style.offPrice_prcnt}>
                <p className={style.ofprice}>MRP{price2}</p>
                <p className={style.ofprcnt}>{off}%off</p>
            </div>
            
    </div>
    <div>
    <p className={style.price}>₹{price1}</p>
    <Button  bgColor={'#ff6f61'} color='white' _hover={{bgColor:'rgb(194, 50, 50)'}}>Add</Button>
    </div>
    </div>
</div>
    );
};

export default ProductCard;