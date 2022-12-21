
import { Box, Button, ButtonGroup, Card, CardFooter, Grid, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "react-multi-carousel/lib/styles.css";

const HealthAllProCard = ({ something, prodVal = 6 }) => {
    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: prodVal,
    //         slidesToSlide: 3, 
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 3,
    //         slidesToSlide: 2, 
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1, 
    //     },
    // };

    return (
        <Box bg="white" p="1rem" width={"90%"} margin={'auto'} border="1x solid green">
<Grid templateColumns={{base:"repeat(2,1fr)",md:"repeat(3 ,1fr)",lg:'repeat(4 ,1fr)'}} gap={1} margin={"auto"}>

                {something.map((e, i) => (
                    <Box
                        // border="solid red 1px"
                        p="0.5rem"
                        key={i}
                        textAlign="left"
                        borderRadius="5px"
                        ml={"1rem"}
                        _hover={{
                            boxShadow:
                                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                        }}
                        cursor="pointer"
                    >
                        <Image h={"40%"} w={"auto"} m="auto" marginBottom={"3px"} src={e.img} />
                        <Box>
                            <Text fontSize={"16px"} marginTop={"4px"}>{e.name}</Text>
                            <Text fontSize={"13px"} marginTop={"4px"}>{e.qty}</Text>
                            <Text>
                                MRP{" "}
                                <span style={{ textDecoration: "line-through" }}>
                                    ₹{e.strikePrice}
                                </span>
                                <span style={{
                                    color: "green",
                                    marginLeft: "1rem"
                                }}>
                                    {e.discount}
                                </span>
                            </Text>
                            <Text fontWeight={"600"} marginTop={"4px"}>₹ {e.price}</Text>
                        </Box>
                        <Box  marginTop={'1rem'}>
                           
                                <ButtonGroup spacing='2'>
                                    <Button color={'white'} variant='solid' bgColor={'#ff6f61'}>
                                    Add to cart
                                    </Button>
                                   
                                </ButtonGroup>
                          
                        </Box>

                    </Box>

                ))}

              </Grid>


            {/* </Carousel> */}
        </Box>
    );
};

export default HealthAllProCard;






