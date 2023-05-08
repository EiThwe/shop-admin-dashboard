import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from "./api/productApi";


export const store = configureStore({
    reducer:{
        [productApi.reducerPath]: productApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(productApi.middleware)
})