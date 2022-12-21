import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../store/Appreducer/action';
import style from '../styles/ProductCard.module.css'
import ProductCard from '../components/ProductCard';
import { Box, Select, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
const VitaminsProducts = () => {
    const location=useLocation()
    const dispatch = useDispatch();
    const {productdata}=useSelector((store)=>store.Appreducer)
    let category=location.state || ""

    useEffect(()=>{
     dispatch(getProduct(category || "immunity"))
    },[dispatch])
  return (
    <>
     <Navbar/>
   <Box>
     <Box width={"90%"} margin={'auto'} display={'flex'} alignItems='center' justifyContent='space-between'>
            <h2 className={style.heading_category}>{category}</h2>
            <Box width={"30%"} border='1px solid black' display={'flex'} alignItems='center' justifyContent='space-between'>
                <Text fontSize='14px' color='#212121'>Sort By :</Text>
            <Select width={'70%'} fontSize='14px' color='#212121'>
                 <option value="">By price</option>
                <option value="">By offer</option>
                <option value="">By name</option>
            </Select>
            </Box>
            
        </Box>
    <div className={style.universal}>
         {productdata?.map((el)=> <ProductCard quantity={el.quantity}  
                                       price2={el.price2}    
                                       price1={el.price1}
                                       off={el.off}
                                       name={el.name}
                                       image={el.image}
                                       category={el.category}
                                       id={el._id}

                            />)}
    </div>
    </Box>
    </>
  )
}

export default VitaminsProducts
