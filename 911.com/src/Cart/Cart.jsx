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
  Link
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

// import Adress from "./Adress";

function Cart() {
  const [data,setData] = useState([]);
  // const [quantity, setQuantity] = useState(1);
  
  // let totalPrice = data?.reduce((a,c)=>a+(c.price1*c.quantity),0) || 0
  // let discountPrice = data?.reduce((a,c)=>a+((c.price2-c.price1)*c.quantity),0) || 0

  let totalPrice=1290
  let discountPrice=100
  useEffect(()=>{
    getData()   
  },[])


  // async function removeOperation(id)
  // {
  //   let result = await fetch(`https://tan-real-buffalo.cyclic.app/smartphones/${id}`,{
  //     method:'DELETE'
  //   })

  //   result = await result.json();
  //   console.warn(result)
  //   getData()
  // }


  // async function getData(){
  //   let result = await fetch("https://tan-real-buffalo.cyclic.app/smartphones");
  //   result = await result.json();
  //   setData(result)
  // }

  
const removeOperation = (id)=>{
  return (
    axios.delete(`http://localhost:8000/cart/${id}`).then((res)=>{
      console.log(res)
}).finally(()=>{
  getData()
})

)
       
}

const getData=()=>{
  return axios.get("http://localhost:8000/cart").then((res)=>{
      setData(res.data)
     
    })
    
}

const incrementQuantity=(id)=>{
  return axios.post("http://localhost:8000/cart",{
    "id":id, 
    "quantity":"1", 
    "type":"inc"
  }).finally(()=>{
    getData()
  })
}

const decrementQuantity=(id)=>{
  return axios.post("http://localhost:8000/cart",{
    "id":id, 
    "quantity":"1", 
    "type":"dec"
  }).finally(()=>{
    getData()
  })
}


// const incrementQuantity=()=>{
//   setQuantity(quantity + 1)
// }

// const decrementQuantity=()=>{
//   setQuantity(quantity - 1)
// }

  return (
    <Box backgroundColor="#f8f8f8FF">
      <CartNavBar />

      <Box width="80%" margin="auto" py="30px">
        <Box display="flex" w="fit-content" gap={8} margin="auto">
          {/* Left section */}
          <Box>     
          <Text fontSize="16px" color="#333">
        Items NOT Requiring Prescription ({data.length})
       
      </Text>
             
            <Item data={data}
            removeOperation={removeOperation}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            
            />

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
