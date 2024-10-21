import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div style={{height:'300px',marginTop:'106px'}} className='p-2 text-white mt-5 w-full bg-stone-600'>
      <div className="flex justify-between">
        <div style={{width:'400px'}} className="mt-3">
          <h5><i className='fa-solid fa-truck-fast font-bold text-2xl mb-3 me-2'></i>E Cart</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum numquam perferendis molestias eaque quibusdam officiis aperiam dignissimos consequuntur quo in! Debitis aut eveniet hic neque, sunt cum ipsum? Explicabo, deserunt.</p>
          <p className='mt-2'>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="flex flex-col mt-3">
          <h5 className='mb-3'>Links</h5>
          <Link to={'/'} style={{textDecoration:'none'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none'}}>Wishlist</Link>
        </div>
        <div className="flex flex-col mt-3">
        <h5 className='mb-3'>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none'}} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none'}} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{textDecoration:'none'}} target='_blank'>React Router</a>
        </div>
        <div className="flex flex-col mt-3">
        <h5 className='mb-3'>Contact Us</h5>
          <div className='flex'>
            <input placeholder='Enter your email here' type="text" name="" id="" className='rounded p-2' />
            <button className='ms-2 bg-black rounded'><i className='fa-solid fa-arrow-right text-white p-2'></i></button>
          </div>
          <div className='flex justify-between mt-3'>
              <a href="" style={{textDecoration:'none'}} target='_blank'><i className='fa-brands fa-twitter'></i></a>
              <a href="" style={{textDecoration:'none'}} target='_blank'><i className='fa-brands fa-instagram'></i></a>
              <a href="" style={{textDecoration:'none'}} target='_blank'><i className='fa-brands fa-facebook'></i></a>
              <a href="" style={{textDecoration:'none'}} target='_blank'><i className='fa-brands fa-linkedin'></i></a>
              <a href="" style={{textDecoration:'none'}} target='_blank'><i className='fa-brands fa-github'></i></a>
              <a href="" style={{textDecoration:'none'}} target='_blank'><i className='fa-solid fa-phone'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; June 2024 Batch, E Cart.Built with React</p>
    </div>
    </>
  )
}

export default Footer