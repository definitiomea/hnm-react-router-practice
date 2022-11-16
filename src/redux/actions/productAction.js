import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/definitiomea/hnm-react-router-practice/products/?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch(productActions.getAllProducts({data}));
    }
}

function getProductsDetail(id) {
    return async (dispatch, getState) => {
        console.log("middle test");
        let url = `https://my-json-server.typicode.com/definitiomea/hnm-react-router-practice/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch(productActions.getSingleProduct({data}));
    }
}

export const productAction={getProducts, getProductsDetail};