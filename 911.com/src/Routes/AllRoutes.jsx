import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HealthCenter from '../components/HealthCenter/HealthCenter'
import ALLProductsBrands from '../components/LandingPage/Page/homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { AyurvedaPage } from '../pages/Ayurveda'
import { HealthPage } from '../pages/Health'
import { PersonalCarePage } from '../pages/PersonalCare'
import AyurvedaProducts from '../pages/AyurvedaProducts'
import HealthCareDevices from '../pages/HealthCareDevices'
import Diabetes from '../pages/Diabetes'
import SkinCareProducts from '../pages/SkinCare'
import BabyCareProducts from '../pages/BabyCare'
import VitaminsProducts from '../pages/Vitamiin'
import Cart from '../Cart/Cart'
import Payment from '../Cart/Payment'
// https://admin-alpha-liard.vercel.app
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<ALLProductsBrands/>}/>
        <Route path='/ayurveda' element={<AyurvedaPage/>}/>
        <Route path='/health' element={<HealthPage/>}/>
        <Route path='/personalcare' element={<PersonalCarePage/>}/>
        <Route path='/alldisease' element={<HealthCenter/>}/>
        <Route path='/ayurvedicproduct' element={<AyurvedaProducts/>}/>
        <Route path='/healthdevice' element={<HealthCareDevices/>}/>
        <Route path='/diabetesproduct' element={<Diabetes/>}/>
        <Route path='/personalcareproducts/skincare' element={<SkinCareProducts/>}/>
        <Route path='/personalcareproducts/babycare' element={<BabyCareProducts/>}/>
        <Route path='/vitaminsproducts' element={<VitaminsProducts/>}/>  
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes
