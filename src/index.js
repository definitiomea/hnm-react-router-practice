import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Provider에는 store를 담아주기 */
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

/* 프로바이더는 여기, 리액트 리덕스에서 땡겨오기 */
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
