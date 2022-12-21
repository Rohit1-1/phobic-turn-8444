import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast 
  } from "@chakra-ui/react";

  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link as NavigateLink } from "react-router-dom";
import { Signin, Signin_failure } from "../store/Authreducer/action";
  
  export default function Login() {
    let location = useLocation();
   
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [userData, setUserData] = useState({});
    const toast = useToast()
    const {isLoading,isAuth}=useSelector((store)=>store.Authreducer)
  
    const handleChange = (e) => {
      const { name, value} = e.target;
     
        setUserData({
          ...userData,
          [name]: value,
        });
      
    };
    console.log(location)
    const handleSignup = (e) => {
      e.preventDefault();
      if(!isAuth){
        dispatch(Signin(userData)).then((res)=>{
            if(res){
              toast({
                title: "Signin Successfull",
                status: 'success',
                position: 'top',
                duration: 5000,
                isClosable: true,
              })
              navigate("/")
            }
            
            else{
              toast({
                title: "Signin Failed",
                description: "Something went wrong! Incorrect email or password",
                status: 'error',
                position: 'top',
                duration: 5000,
                isClosable: true,
              })
              dispatch(Signin_failure())
            }
          })
      }
      else{
        toast({
            title: "Already Signin",
            status: 'error',
            position: 'top',
            duration: 5000,
            isClosable: true,
          })
      }
      
    }
      
 
  
  
    return (
      <>
      <Navbar/>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={"#fffcf8"}
          marginTop={-8}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign in to your account
              </Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <form onSubmit={handleSignup}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name="email" onChange={handleChange} />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                        
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                      p={{ base: "1rem 1rem", lg: "1rem 2rem", xl: "1rem 2rem" }}
                      loadingText="Submitting"
                      size="lg"
                      bg={"#ff6f61"}
                      color={"white"}
                      _hover={{
                        bg: "#ff6f61",
                      }}
                      type="submit"
                      isLoading={isLoading}
                    >
                     Sign In
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Don't have an account?{" "}
                      <Link color={"blue.400"}>
                        <NavigateLink to={"/signup"}>Sign up</NavigateLink>
                      </Link>
                    </Text>
                  </Stack>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </>
    );
  }
  