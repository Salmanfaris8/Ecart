import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {

  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,error);
  
  const [currentPage,setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastProductIndex = currentPage * productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductCards = allProducts?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  const navigaetToNextPage = ()=>{
    if(currentPage!=totalPage){
      setCurrentPage(currentPage+1)
    }
  }

  const navigaetToPreviousPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
      <Header insideHome={true}/>
      <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        {
          loading?
           <div className='flex justify-center items-center my-5'>
            <img width={'500px'} src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif" alt="" />
          </div>
          :
          <>
            <div className="grid grid-cols-4 gap-4">
              {
                allProducts?.length>0?
                visibleProductCards?.map(product=>(
                  <div key={product?.id} className="rounded border p-2 shadow">
                    <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                    <div className="text-center">
                    <h3 className='text-xl font-bold my-2'>{product?.title}</h3>
                    <Link to={`${product?.id}/view`} className='text-white bg-stone-600 p-1 rounded'>View more</Link>
                  </div>
                </div>
                ))
                :
                <div style={{width:'80vw',height:'50vh'}} className='flex justify-center items-center text-red-600 my-5 text-7xl font-semibold'>Product Not Found</div>
              }
            </div>
            <div className="text-center text-2xl font-semibold my-5 mt-20">
              <span onClick={navigaetToPreviousPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
              <span>{currentPage} of {totalPage}</span>
              <span onClick={navigaetToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>
            </div>
          </>
        }
        
      </div>
    </>
  )
}

export default Home