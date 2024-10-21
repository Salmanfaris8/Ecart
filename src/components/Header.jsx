import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {

  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()

  return (
    <nav className='flex bg-stone-600 w-full p-5'>
        <Link className='text-white font-bold text-2xl' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i> E Cart</Link>
        <ul className='flex-1 text-right'>
            {
              insideHome && <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='rounded p-1' style={{width:'300px'}} placeholder='Search Products Here' type="text" /></li>
            }
            <li className='list-none inline-block px-5 text-white'> <Link to={'/wishlist'}><i className='fa-solid fa-heart text-red-600'></i> Wishlist <span className='rounded bg-slate-800 ps-2 pe-2 pt-1 pb-1'>{userWishlist?.length}</span></Link> </li>
            <li className='list-none inline-block px-5 text-white'> <Link to={'/cart'}><i className='fa-solid fa-cart-plus text-green-600'></i> Cart <span className='rounded bg-slate-800 ps-2 pe-2 pt-1 pb-1'>{userCart?.length}</span></Link> </li>
        </ul>
    </nav>
  )
}

export default Header