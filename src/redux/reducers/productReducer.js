let initialState = {
    productList: [],
    productDetailList: []
};

function productReducer(state = initialState, action) {
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
}

export default productReducer;