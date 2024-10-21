import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,dataFromView)=>{
            state.push(dataFromView.payload)
        },
        removeWishlistItem:(state,dataFromWishlist)=>{
            return state.filter(item=>item.id!=dataFromWishlist.payload)
        }
    }
})

export const {addToWishlist,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer