import React from "react";
import {
  Box,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
function Item({name,price1,price2,orderquantity,category,id,productId,handleIncrease,handleDecrease,handleDelete}) {
  const handleClickplus=()=>{
    handleIncrease(name,price1,price2,category,id,productId,)
  }
 
  const handleClickminus=()=>{
    if(orderquantity!==1){
      handleDecrease(name,price1,price2,category,id,productId,)
    }
    
  }
  return (

    
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
              <Text  w="60%" >{name}</Text>
            </Box>
            <Box>
              <Text>₹{price1}</Text>
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
              <Text>{category}</Text>
            </Box>
            <Box>
              MRP <Text as="s">₹{price2}</Text>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="10px"
            mt="16px"
          >
            {/*  */}
            <Box display="flex" mt="10px" cursor="pointer" onClick={()=>handleDelete(id,productId,orderquantity)}>
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
                onClick={handleClickminus}
              />
              <Text color="#212121" fontSize="14px" mx="4px">
                {orderquantity}
              </Text>
              <Image 
                src="https://www.1mg.com/images/plus-cart.svg"
                cursor="pointer"
                onClick={handleClickplus}
              />
            </Box>
            
          </Box>
          
        </Box>

      </Box>
      
      <Divider/>
    </Box>
    
  );
}

export default Item;
