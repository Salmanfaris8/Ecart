import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {

  const {id} = useParams()
  // console.log(id);
  const userCart = useSelector(state=>state.cartReducer)
  const[product,setProduct] = useState({})
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(sessionStorage.getItem("allproducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allproducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

  // console.log(product);

  const handleWishlist =(product)=>{
    const exisitingProduct = userWishlist?.find(item=>item.id==product.id)
    if(exisitingProduct){
      alert("Product already in your wishlist!!!")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart =(product)=>{
    dispatch(addToCart(product))
    const exisitingProduct = userCart?.find(item=>item.id==product.id)
    if(exisitingProduct){
      alert("Product added")
    }
  }

  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='flex content-center items-center mx-5'>
        <div className="grid grid-cols-2 items-center gap-4">
          <img width={'80%'} src={product?.thumbnail} alt="" />
          <div>
          <h2 className='font-semibold text-lg'>Product ID : {product?.id}</h2>
          <h1 className='text-5xl font-bold mb-3'>{product?.title}</h1>
          <h1 className='font-bold text-slate-600 text-xl'>Brand : {product?.brand?product.brand:'Nil'}</h1>
          <h4 className="font-bold text-xl mb-3">Rating : {product?.rating}</h4>
          <h4 className="font-bold text-red-600 text-2xl mb-3">$ {product?.price}</h4>
          <h3 className='font-semibold text-lg mb-3'>Category : {product?.category}</h3>
          <p className='font-bold text-lg'>
            <span>Description : </span>{product?.description}
          </p>
          <div className='mt-5'>
            <button onClick={()=>handleWishlist(product)} className="text-white bg-blue-500 rounded p-2 me-4">ADD TO WISHLIST</button>
            <button onClick={()=>handleCart(product)} className="text-white bg-green-500 rounded p-2">ADD TO CART</button>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default View