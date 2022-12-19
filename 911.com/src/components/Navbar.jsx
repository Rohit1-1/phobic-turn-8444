import { Box, Flex,  Image, Input, Text, } from '@chakra-ui/react';
import {BsCart3} from 'react-icons/bs';
import {IoIosSearch} from 'react-icons/io';
import React from 'react'
import { Link as BrowseLink, NavLink, useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png'
import style from '../styles/Navbar.module.css'
import {SlUser} from 'react-icons/sl'
import { Dropdown } from './Dropdown';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {isAuth}=useSelector((store)=>store.Authreducer)
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


           <Box>{isAuth?<SlUser/>:<NavLink to={'/signup'}>Login / Signup</NavLink>}</Box>
           <Box><NavLink to='/ayur' state={'ayurvedic'}>Offers</NavLink></Box>
           <Box><NavLink to={'/cart'}><BsCart3 size='21px'/></NavLink></Box>
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
