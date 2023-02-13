import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  ButtonGroup,
  Heading,
  Checkbox,
  Select,
  Icon,
  Link,
  useToast
} from "@chakra-ui/react";
import { ChevronRightIcon, InfoOutlineIcon, LockIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import CartNavBar from "./CartNavBar";
import Coupon from "./Coponents/Coupon";
import Bill from "./Coponents/Bill";
import Item from "./Coponents/Item"
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCartdata, updateCart } from "../store/Appreducer/action";

// import Adress from "./Adress";

function Cart() {
  const toast = useToast();
  const {cartdata}=useSelector((store)=>store.Appreducer);
  const dispatch=useDispatch()
  
 
  useEffect(()=>{
  dispatch(getCartdata())
  },[dispatch])
  const handleIncrease=(name,price1,price2,category,id,productId)=>{
    const payload={name,price1,price2,orderquantity:1,category,id,productId,type:"inc"}
     dispatch(updateCart(payload)).then((res)=>{
      if(res===`Out of stock`){
        toast({
          title: "Out of Stock",
          status: "warning",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      }
      
     })
  }
  const handleDecrease=(name,price1,price2,category,id,productId)=>{
    const payload={name,price1,price2,orderquantity:1,category,id,productId,type:"dec"}
     dispatch(updateCart(payload))
  }
  const handleDelete=(id,productId,orderquantity)=>{
    const payload={productId,orderquantity}
     dispatch(deleteCart(id,payload))

  }
  let totalPrice;
  let discountPrice;
  try {
     totalPrice = cartdata?.reduce((a,c)=>a+(c.price1*c.orderquantity),0) || 0
     discountPrice = cartdata?.reduce((a,c)=>a+((c.price2-c.price1)*c.orderquantity),0) || 0
  } catch (error) {
    console.log(error);
  }
   


  return (
    <Box backgroundColor="#f8f8f8FF">
      <CartNavBar />

      <Box width="80%" margin="auto" py="30px">
        <Box display="flex" w="fit-content" gap={8} margin="auto">
          {/* Left section */}
          <Box>     
          <Text fontSize="16px" color="#333">
        Items NOT Requiring Prescription ({cartdata.length})
       
      </Text>

   {cartdata?.map((item)=><Item name={item.name} price1={item.price1} price2={item.price2} category={item.category}
   orderquantity={item.orderquantity} id={item._id} productId={item.productId} handleIncrease={handleIncrease}   
   handleDecrease={handleDecrease} handleDelete={handleDelete}/> )}
           

</Box>

    
          

          {/* Right Section */}
          <Box>
            <Coupon />

            {/* bill */}

            <Bill totalPrice={totalPrice}
            discountPrice={discountPrice}
            />

            {/* checkout button */}

            <Box mt="16px">
              <Box
                w="449px"
                bg="#fff"
                textAlign="left"
                borderRadius="2px"
                padding="8px 16px 12px"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="8px"
                  margin="0 8px"
                  mb="5px"
                >
                  <Text color="#757575" fontSize="14px">
                    Your delivery location
                  </Text>
                  <Box display="flex" alignItems="center">
                    <Icon as={MdLocationOn} color="#ff6f61" />
                    <Text color="#ff6f61" fontWeight="700">
                      Koppal
                    </Text>
                  </Box>
                </Box>
                <a href="/payment">
                <Button
                  w="100%"
                  colorScheme="red"
                  variant="solid"
                  padding="0px 16px"
                  fontWeight="400"
                  fontSize="16px"
                  h="50px"
                >
                  CHECKOUT
                </Button>
                </a> 
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
