import React from 'react'
import ProdctCard from '../components/ProdctCard'
import style from './Product.module.css'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../store/Appreducer/action'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
const Product = () => {
    const dispatch=useDispatch()
    const [load,setLoad]=useState(1)
    const [openAddForm,setOpenAddform]=useState(false)
    const {isopen}=useSelector((store)=>(store.isOpen))
    const{data,isLoading}=useSelector((store)=>store.Appreducer)
    useEffect(()=>{
         dispatch(getProduct())
    },[dispatch])
    const handleLoad=()=>{
        let stload=load+1;
        setLoad(stload)
        dispatch(getProduct(stload))
    }
    //<button className={style.add_product_btn}>Add Product</button>
  return (
    <div  style={isopen?{width:"85%",float:"right"}:{width:"96%",float:"right"}}>
       <div className={style.add_product_cont} style={{display:"block",marginTop:"1rem"}}><button onClick={()=>setOpenAddform(!openAddForm)} className={style.add_product_btn}>Add Product</button>
       <h3 style={{marginTop:"10px"}}>Products : {data.length}</h3>

       <div className={openAddForm? style.addformopen:style.addform} >
        <form >
            <div>
                <label className={style.lable}>Picture</label>
                <input className={style.input} placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Title</label>
                <input className={style.input}  placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Category</label>
                <input className={style.input}  placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Off Price</label>
                <input className={style.input}  placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Off %</label>
                <input className={style.input} placeholder='Add product'/>
            </div>
            <div>
                <label className={style.lable}>Mrp</label>
                <input className={style.input} placeholder='Add product'/>
            </div>

            <div>
                <label className={style.lable}>Stock</label>
                <input className={style.input} placeholder='Add product'/>
            </div>

            <input className={style.form_add_btn} type="button" value={"ADD"}/>
        </form>
        <button onClick={()=>setOpenAddform(!openAddForm)} className={style.close_btn}>Close</button>
     </div>
       </div> 
     <div className={style.universal} style={isopen?{width:"100%"}:{width:"96%"}}>
        {data?.map((el)=> <ProdctCard quantity={el.quantity}  
                                       price2={el.price2}    
                                       price1={el.price1}
                                       off={el.off}
                                       name={el.name}
                                       image={el.image}
                                       category={el.category}
                                       id={el._id}

                            />)}
     </div>
     <Button  isLoading={isLoading}
    loadingText='Loading' onClick={handleLoad} className={style.form_add_btn}>Load More</Button>
    </div>
  )
}



export default Product
