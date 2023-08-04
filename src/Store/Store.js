import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice"
import productSlice from "./productSlice";
const Store=configureStore({
    reducer:{
        cart:CartSlice,
        product:productSlice,
    }
});

export default Store;
