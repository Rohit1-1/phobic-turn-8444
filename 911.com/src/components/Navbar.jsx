import { Box, Flex,  Image, Input, Text, } from '@chakra-ui/react';
import {BsCart3} from 'react-icons/bs';
import {IoIosSearch} from 'react-icons/io';
import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png'
import style from '../styles/Navbar.module.css'
import {SlUser} from 'react-icons/sl'
import { Dropdown } from './Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartdata } from '../store/Appreducer/action';

const Navbar = () => {
  const {isAuth}=useSelector((store)=>store.Authreducer)
  const {cartdata}=useSelector((store)=>store.Appreducer)
  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(getCartdata())
  },[dispatch])
  const navigate=useNavigate()
  return (
  <Box className={style.nav}>
     <Box width='98%' margin='auto' >{/*  main   */}
       <Flex  alignItems='center' gap='9'>
           <Box cursor={'pointer'} onClick={()=>navigate('/')}><Image src={logo} alt='911.com'/></Box>
           <Flex width='52%'  gap={2} >
              {/* <Box><Input placeholder='Enter Your city'/></Box> */}
              <Box bg={'#f8f8f8'} p={2} width='100%' display='flex' alignItems='center'><Input variant='unstyled' placeholder='Search '/><IoIosSearch size='21px'/></Box>
           </Flex>


           <Box>{isAuth?<SlUser size='24px'/>:<NavLink to={'/signup'}>Login / Signup</NavLink>}</Box>
           <Box><NavLink to='/ayur' state={'ayurvedic'}>Offers</NavLink></Box>
           <Box className={style.cart_cont}><NavLink to={'/cart'}><BsCart3 size='26px'/><div className={style.cartquantity}>{cartdata?.length}</div></NavLink></Box>
           <Box><Text>NeedHelp</Text></Box>
       </Flex>
    </Box>

   <Box>
    <Dropdown/>
   </Box>
  </Box>
    
      
    )
}

export default Navbar
