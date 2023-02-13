import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/Appreducer/action";
import style from "../styles/ProductCard.module.css";
import ProductCard from "../components/ProductCard";
import { Box, Button, Select, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
const VitaminsProducts = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const { productdata, isLoading , totalPage} = useSelector((store) => store.Appreducer);
  let category = location.state || "";

  useEffect(() => {
    dispatch(getProduct(category || "immunity"));
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
        <Box>
          <Box
            width={"90%"}
            margin={"auto"}
            display={"flex"}
            alignItems="center"
            justifyContent="space-between"
          >
            <h2 className={style.heading_category}>{category}</h2>
            <Box
              width={"30%"}
              border="1px solid black"
              display={"flex"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="14px" color="#212121">
                Sort By :
              </Text>
              <Select width={"70%"} fontSize="14px" color="#212121">
                <option value="">By price</option>
                <option value="">By offer</option>
                <option value="">By name</option>
              </Select>
            </Box>
          </Box>
          <div className={style.universal}>
            {productdata?.map((el) => (
              <ProductCard
              key={el.id}
                quantity={el.quantity}
                price2={el.price2}
                price1={el.price1}
                off={el.off}
                name={el.name}
                image={el.image}
                category={el.category}
                id={el._id}
              />
            ))}
          </div>
        </Box>
        <Box
        gap={2}
        marginTop={"1.8rem"}
        marginBottom={"1.8rem"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          bgColor={"#ff6f61"}
          color="white"
          _hover={{ bgColor: "rgb(194, 50, 50)" }}
          bg={"rgb(194, 50, 50)"}
        >
          Prev
        </Button>
        <Text display={"flex"} alignItems={"center"}>
          {page}
        </Text>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          bgColor={"#ff6f61"}
          disabled={page === totalPage}
          color="white"
          bg={"rgb(194, 50, 50)"}
          _hover={{ bg: "rgb(194, 50, 50)" }}
        >
          Next
        </Button>
      </Box>
        </>
      )}
    </>
  );
};

export default VitaminsProducts;
