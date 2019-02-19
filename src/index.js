import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import { Home } from './home/home.component';
import {ProductProvider} from  './home/context';
ReactDOM.render(
    <ProductProvider>
        <Router>
            <Home />
        </Router>
    </ProductProvider>
 ,
document.getElementById('root'));
serviceWorker.unregister();
