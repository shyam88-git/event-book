import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./style.css";
import { Provider } from 'react-redux';
//  import '../node_modules/bootstrap/dist/css/bootstrap.css';
 import '../node_modules/mdbootstrap/css/bootstrap.css';
 import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';


import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
    <Provider store={store}>
    <App />
    </Provider>
  
);


