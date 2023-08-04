
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    data:[],
    status:'idle'
}

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status='idle'
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status='Error'
        })
    }
        
});

export const {fetchProducts}=productSlice.actions;
export default productSlice.reducer;

export const getProducts=createAsyncThunk('product/fetch',async()=>{
    const list=await axios.get("https://fakestoreapi.com/products");
    const result= list.data;
    return result;
})

// export function getProducts(){
//     return async function getProductThunk(dispatch,getState){
//         const list=await axios.get("https://fakestoreapi.com/products");
//         const result= list.data;
//         dispatch(fetchProducts(result));
//     }
// }