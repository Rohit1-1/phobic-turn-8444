import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  useToast,
  Tabs, TabList, TabPanels, Tab, TabPanel, Divider,Input
} from "@chakra-ui/react";
import CartNavBar from "./CartNavBar";
import Bill from "./Coponents/Bill";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderplacedd } from "../store/Appreducer/action";


function Payment() {
    const toast = useToast()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleclick=()=>{
      dispatch(orderplacedd()).then((res)=>{
        if(res==="Order Placed"){
          toast({
            title: 'Order Placed successfully',
            status: 'success',
            position: 'top',
            duration: 5000,
            isClosable: true,
          })
          navigate('/')
        }
        else{
          toast({
            title: 'Something went wrong',
            status: 'error',
            position: 'top',
            duration: 5000,
            isClosable: true,
          })
        }
      }).catch((err)=>{
   console.log(err);
      })
      
    }
  return (
    <Box backgroundColor="#f8f8f8FF">
      <CartNavBar />

      <Box width="80%" margin="auto" py="30px">
        <Box display="flex" w="fit-content" gap={8} margin="auto">
          {/* Left section */}
          <Box>

        <Box
        w="620px"
        h="600px"
        bg="#fff3e3"
        textAlign="left"
        pl="15px"
        lineHeight={1.8}
        shadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
        borderRadius="2px"
        mt="3px"
      >
        <Box >
          <Box 
          >
            <Tabs variant='unstyled'  orientation="vertical" bg="white" h="600px"  >
  <TabList bg="#fff3e3" p="0" py="20px" w="350px"   fontSize="16px"       >

    <Tab _selected={{ color: 'rgba(33,33,33,.87)', bg: 'white' }} py="10px" pl="0px" ml="0px"  ><Image w="35px" h="35px" mr="10px" src="https://onemg.gumlet.io/image/upload/zf0de2srckrhx3fk8blm.png" />UPI</Tab> 

    <Tab _selected={{ color: 'rgba(33,33,33,.87)', bg: 'white' }} py="10px" pl="0px" ml="0px" ><Image w="35px" h="30px" mr="10px" src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172217/marketing/vvew3rcvwfjrhknifj1z.png"/>WALLETS</Tab> 

    <Tab _selected={{ color: 'rgba(33,33,33,.87)', bg: 'white' }} py="10px" pl="0px" ml="0px" ><Image w="35px" h="30px" mr="10px" src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172186/marketing/p45zk16fua8dmxany3up.png"/>CARDS</Tab>

    <Tab _selected={{ color: 'rgba(33,33,33,.87)', bg: 'white' }}  py="10px" pl="0px" ml="0px" ><Image w="35px" h="30px" mr="10px" src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172229/marketing/bsnk5fvtd4b6xffsvjdm.png"/>NET BANKING</Tab>

    <Tab _selected={{ color: 'rgba(33,33,33,.87)', bg: 'white' }}  py="10px" pl="0px"  ><Box display="flex" justifyContent={"space-between"}><Image w="35px" h="30px" mr="10px" src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172202/marketing/pyzcsicqsnwawi4yrpo7.png"/> <Text >PAY ON DELIVERY</Text></Box></Tab>


    
    
  </TabList>
  <TabPanels h="600px">
    <TabPanel>
    <Box  >
    <Text mb='20px' fontSize={"14px"} fontWeight="500">Transfer money from your bank account using your UPI app</Text>
            <Box display="flex" gap={4} alignItems="center" mb="22px" >
                <Text>We accept</Text>
                <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595473/marketing/pusi6g59xoxcyevsihmm.png" w="30px" h="30px" />
                <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595522/marketing/uwfgfsxaq3i9m9aglqsc.png" w="30px" h="30px" />
                <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581595567/marketing/i0yoaxd0mbcc9jdzyjrq.png" w="30px" h="30px" />
                <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto,w_107,h_57/v1581508161/marketing/zhcu7wuhtxelq710o4bc.jpg" w="30px" h="16px" />

            </Box>

            <Divider/>

            <Box>
                <Text>Saved UPI ID</Text>
                <Text>Pay via new UPI ID</Text>
                <Input variant='flushed' placeholder='Ex: mobilenumber@UPI' />
                <Text>The UPI ID is in the format of name/phone number@bankname</Text>
            </Box>
            
        </Box>
    </TabPanel>
    <TabPanel>
    <Box display="flex" border={"1px solid #ff6f61"} shadow="0 0 0 1px #ff6f61"  alignItems="center" gap={5} borderRadius="5px" padding="15px" cursor={"pointer"}>
            <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530103046/marketing/dwuduzecduhobnrvro1z.png"/>
            <Text fontWeight={500} color="rgba(33,33,33,.87)">COMING SOON</Text>
        </Box>
    </TabPanel>
    <TabPanel>
    <Box display="flex" border={"1px solid #ff6f61"} shadow="0 0 0 1px #ff6f61"  alignItems="center" gap={5} borderRadius="5px" padding="15px" cursor={"pointer"}>
        
            <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530103046/marketing/dwuduzecduhobnrvro1z.png"/>
            <Text fontWeight={500} color="rgba(33,33,33,.87)">COMING SOON</Text>
        </Box>
    </TabPanel>
    <TabPanel>
    <Box display="flex" border={"1px solid #ff6f61"} shadow="0 0 0 1px #ff6f61"  alignItems="center" gap={5} borderRadius="5px" padding="15px" cursor={"pointer"}>
            <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530103046/marketing/dwuduzecduhobnrvro1z.png"/>
            <Text fontWeight={500} color="rgba(33,33,33,.87)">COMING SOON</Text>
        </Box>
    </TabPanel>
    <TabPanel>
        <Box display="flex" border={"1px solid #ff6f61"} shadow="0 0 0 1px #ff6f61"  alignItems="center" gap={5} borderRadius="5px" padding="15px" cursor={"pointer"}>
            <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530103046/marketing/dwuduzecduhobnrvro1z.png"/>
            <Text fontWeight={500} color="rgba(33,33,33,.87)">CASH ON DELIVERY</Text>
        </Box>
      
    </TabPanel>
  </TabPanels>
</Tabs>
           
          </Box>

          

         
          
        </Box>

        

        

    
      </Box>
      
    </Box>

          {/* Right Section */}
          <Box>

            {/* bill */}

            <Bill />

            {/* checkout button */}

            <Box mt="16px">
              <Box
                w="449px"
                bg="#fff"
                textAlign="left"
                borderRadius="2px"
                
              >
                
                <Button
                  w="100%"
                  colorScheme="red"
                  variant="solid"
                  padding="0px 16px"
                  fontWeight="400"
                  fontSize="16px"
                  h="50px" 
                  onClick={handleclick}
                >
                 PLACE ORDER
                </Button>
                
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Payment;
