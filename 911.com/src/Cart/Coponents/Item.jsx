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
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Item({data,removeOperation,incrementQuantity,decrementQuantity}) {
  
 
  return (

    [1,2,3].map((item)=>(
        <Box>
      

        <Box
        w="600px"
        bg="#fff"
        textAlign="left"
        padding="10px"
        lineHeight={1.8}
        shadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
        borderRadius="2px"
        mt="3px"
      >
        <Box mb="16px" pt="10px">
          <Box
            display="flex"
            justifyContent="space-between"
            color="#333"
            fontSize="12px"
            fontWeight={700}
            
          >
            <Box>
              <Text  w="60%" >{item.name}Refresh Tears 0.5% Bottle Of 10ml Eye Drops</Text>
            </Box>
            <Box>
              <Text>₹{item.price1}150.84</Text>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            color="#9e9e9e"
            fontSize="10px"
            fontWeight={700}
            mt="8px"
          >
            <Box>
              <Text>tube of 100 ml Face Wash</Text>
            </Box>
            <Box>
              MRP <Text as="s">₹{item.price2}150.84</Text>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="10px"
            mt="16px"
          >
            {/*  */}
            <Box display="flex" mt="10px" cursor="pointer" onClick={()=>removeOperation(item.id)}>
              <Image
                mr="4px"
                src="https://img.1mg.com/images/delete_icon.svg"
              />
              <Text fontWeight={700} color="#9e9e9e" fontSize="12px">
                Remove
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
             <Image
                src="https://www.1mg.com/images/minus-cart.svg"
                cursor="pointer" 
                onClick={() => decrementQuantity() }
              />
              <Text color="#212121" fontSize="14px" mx="4px">
                {item.quantity}
              </Text>
              <Image 
                src="https://www.1mg.com/images/plus-cart.svg"
                cursor="pointer"
                onClick={() => incrementQuantity() }
              />
            </Box>
            
          </Box>
          
        </Box>

        

        

    
      </Box>
      

      
      <Divider/>
    </Box>

))

     


    
  );
}

export default Item;
