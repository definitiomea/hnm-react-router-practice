/* 실패한 시도 사례

import { useParams } from 'react-router-dom';
...

function getProductsDetail(id) {
    let { id } = useParams();
    ...
}
*/

/* 파라미터 받아오기 */

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/definitiomea/hnm-react-router-practice/products/?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        /* 데이터 불러오기가 성공, 이 경우에 따라서 리듀서 만들어주기 */
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data}});
    }
}

function getProductsDetail(id) {
    return async (dispatch, getState) => {
        console.log("middle test");
        let url = `https://my-json-server.typicode.com/definitiomea/hnm-react-router-practice/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type: "GET_PRODUCT_DETAIL_SUCCESS", payload: {data}});
    }
}

export const productAction={getProducts, getProductsDetail};