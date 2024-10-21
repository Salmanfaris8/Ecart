import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div>
      <Header/>
      <div style={{height:'100vh'}} className="flex justify-center items-center flex-col">
        <h1 className='text-7xl font-bold mt-2'>404</h1>
        <img width={'500px'} src="https://i.pinimg.com/originals/a3/59/56/a35956ec9f42082d3eeee4ba1b506060.gif" alt="" />
        <h1 className='text-4xl font-bold mb-2'>Looks like you'r lost.</h1>
        <p className='font-semibold mb-2'>The page your lokking is not available</p>
        <Link className='bg-blue-600 rounded p-1 text-white' to={'/'}>Home</Link>
      </div>
    </div>
  )
}

export default Pnf