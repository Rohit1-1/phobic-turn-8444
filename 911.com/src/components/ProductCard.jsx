import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import style from "../styles/ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../store/Appreducer/action";
import { getData } from "../utils/storage";
import { useNavigate } from "react-router-dom";
const ProductCard = ({
  quantity,
  price2,
  price1,
  off,
  name,
  image,
  category,
  id,
}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.Authreducer);
  const token = getData("token");
  const handleClick = () => {
    let orderquantity = 1;
    let payload = {
      quantity,
      price1,
      price2,
      name,
      image,
      category,
      id,
      orderquantity,
    };
    if (isAuth && token) {
      dispatch(addtoCart(payload)).then((res) => {
        if (res === "Already in cart") {
          toast({
            title: "Item is already in the cart",
            status: "warning",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        } else if (res === "Added to cart") {
          toast({
            title: "Added to cart",
            status: "success",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Something went wrong",
            status: "success",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
        }
      });
    } else {
      toast({
        title: "Please Login First",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    }
  };

  return (
    <div className={style.singlecard} >
      <div>
        <img style={{ height: "11rem" }} src={image} alt={name} />
      </div>
      <div className={style.info_box}>
        <h4 textOverflow="ellipsis" className={style.title}>
          {name}
        </h4>
        <p className={style.category}>{category}</p>
        <div className={style.price_box}>
          <div className={style.offPrice_prcnt}>
            <p className={style.ofprice}>MRP{price2}</p>
            <p className={style.ofprcnt}>{off}%off</p>
          </div>
        </div>
        <div>
          <p className={style.price}>₹{price1}</p>
          <>
            {quantity === 0 ? (
              <Button
                bgColor={"#ff6f61"}
                color="white"
                _hover={{ bgColor: "rgb(194, 50, 50)" }}
                disabled
              >
                Out of Stock
              </Button>
            ) : (
              <Button
                onClick={handleClick}
                bgColor={"#ff6f61"}
                color="white"
                _hover={{ bgColor: "rgb(194, 50, 50)" }}
              >
                Add
              </Button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
