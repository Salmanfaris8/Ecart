import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts',async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    // session storage 
    sessionStorage.setItem("allproducts",JSON.stringify(result.data.products))
    // console.log(result);
    return result.data.products
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:false,
        error:""
    },
    reducers:{
        // synchronous actions
        searchProduct:(state,searchKeyFromHeader)=>{
            state.allProducts = state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(searchKeyFromHeader.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.fulfilled,(state,apiResult)=>{
            state.allProducts = apiResult.payload
            state.dummyAllProducts = apiResult.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(fetchAllProducts.pending,(state,apiResult)=>{
            state.allProducts = []
            state.dummyAllProducts = []
            state.loading = true
            state.error = ""
        })
        builder.addCase(fetchAllProducts.rejected,(state,apiResult)=>{
            state.allProducts = []
            state.dummyAllProducts = []
            state.loading = false
            state.error = "API CALL FAILED"
        })
    }
})

export const {searchProduct} = productSlice.actions
export default productSlice.reducer