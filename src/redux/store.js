import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* rootReducer는 임의로 붙는 이름
+ index.js는 기본 파일을 뜻하는 이름이라 폴더 이름까지만 입력해도 읽어온다. */

import rootReducer from "./reducers"

import productReducer from "./reducers/productReducer"
import authenticateReducer from "./reducers/authenticateReducer";

/* let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); */

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer
    }
});

export default store;