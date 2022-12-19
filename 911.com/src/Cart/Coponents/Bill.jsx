import React from 'react'
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
    Divider
  } from "@chakra-ui/react";

function Bill({totalPrice,discountPrice}) {
  return (
    <Box mt="16px" shadow="0 1px 2px 0 rgb(0 0 0 / 20%)"  borderRadius="2px">
  <Box
    w="449px"
    bg="#fff"
    textAlign="left"
    borderRadius="2px"
    px="12px"
    lineHeight={1.8}
    
  >
    <Box
      display="flex"
      justifyContent="space-between"
      py="8px"
      color="#757575" fontSize="12px"
      
    >
        
            <Box ><Text>Item Total(MRP)</Text></Box>
            <Box><Text>₹{totalPrice}1280</Text></Box>
            
    </Box>
    {/* <Divider/> */}

    <Box
      display="flex"
      justifyContent="space-between"
      py="8px"
      color="#757575" fontSize="12px"
    >
        
            <Box ><Text>Price Discount</Text></Box>
            <Box><Text>-₹{discountPrice}100</Text></Box>
            
    </Box>
    <Divider />
    <Box
      display="flex"
      justifyContent="space-between"
      py="8px"
      color="#757575" fontSize="12px"
    >
        
            <Box ><Text>Shipping Fee</Text></Box>
            <Box><Text>₹0</Text></Box>
            
    </Box>
    <Divider />
    
    <Box
      display="flex"
      justifyContent="space-between"
      py="8px"
      color="#757575" fontSize="14px" fontWeight={700}
    >
        
            <Box ><Text>To be paid</Text></Box>
            <Box><Text>₹1180</Text></Box>
            {/* {totalPrice-discountPrice} */}
            
    </Box>

    
    
  </Box>
  <Box
      display="flex"
      justifyContent="space-between"
      py="16px"
      color="#757575" fontSize="12px" bg="#e4f6e7" px="12px" 
    >
        
            <Box ><Text>Total Savings</Text></Box>
            <Box color="#1aab2a" fontSize="14px" fontWeight={700} ><Text>₹{discountPrice}100</Text></Box>
            
    </Box>

</Box>
  )
}

export default Bill