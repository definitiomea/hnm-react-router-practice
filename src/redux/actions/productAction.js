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

export const productAction={getProducts}