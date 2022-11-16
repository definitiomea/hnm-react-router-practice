import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList: [],
    productDetailList: []
};

/* function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch(type) {
        case "GET_PRODUCT_SUCCESS":
            return {
                ...state, productList: payload.data
            };
        case "GET_PRODUCT_DETAIL_SUCCESS":
            console.log("detail reducer test");
            return {
                ...state, productDetailList: payload.data
            }
        default:
            return { ...state };
    }
} */

/* export default productReducer; */

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProducts(state, action) {
            state.productList = action.payload.data;
        },
        getSingleProduct(state, action) {
            state.productDetailList = action.payload.data;
        }
    },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;