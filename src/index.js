import 'reset-css/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserForm from './UserForm';
import UserFormRef from './UserFormRef';
import * as serviceWorker from './serviceWorker';

// import ItemsList from './Navigation'

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'))

// const propsValues = {
//     title: "Lista elementów",
//     items: [
//         "HTC U Ultra", 
//         "iPhone 7", 
//         "Google Pixel", 
//         "Hawei P9", 
//         "Meizu Pro 6", 
//         "Asus Zenfone 3"
//     ]
// }
// ReactDOM.render(
//     <ItemsList data={propsValues} />,
//     document.getElementById("nav")
// )
// ReactDOM.render(<FirstTest />, document.getElementById('container'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
