import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {

  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)

  const handleCart =(product)=>{
    dispatch(addToCart(product))
    const exisitingProduct = userCart?.find(item=>item.id==product.id)
    dispatch(removeWishlistItem(product.id))
    if(exisitingProduct){
      alert("Product added")
    }

  }

  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        {
          userWishlist?.length>0?
          <>
          <h1 className='text-4xl font-semibold text-red-600 '>Your Wishlist</h1>
            <div className="grid grid-cols-4 gap-4 mt-5">
              {
                userWishlist?.map(product=>(
                  <div key={product?.id} className="rounded border p-2 shadow">
                  <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                  <div className="text-center">
                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                    <div className='flex justify-evenly'>
                      <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='p-2 text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                      <button onClick={()=>handleCart(product)} className='p-2 text-xl'><i className='fa-solid fa-cart-plus text-green-600'></i></button>
                    </div>
                  </div>
                </div>
                ))
              }
            </div>
          </>
        :
        <div className='flex flex-col justify-center items-center'>
          <img width={'500px'} src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif" alt="" />
          <div className='flex justify-center items-center text-red-600 my-5 text-5xl font-semibold'>Your wishlist is Empty</div>
        </div>
        }
      </div>
    </>
  )
}

export default Wishlist