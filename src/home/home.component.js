import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TopHeader} from '../shared/top-header/top-header.component';
import {Switch,Route} from  'react-router-dom';
import {Cart} from './cart/cart.component';
import {BrandsList} from './brands-list.component';
import {Details} from './details.component';
import {ProductsList} from './products-list.component';
import {Product} from './product.component';
import {HomeText} from './hometext.component';
import {Link} from 'react-router-dom';

let items = [
    'Strong',
    'Mixed',
    'ForDevelopers',
];

export  class Home extends React.Component{
     constructor(props){
        super(props);
     }
     render(){
        return(
            <React.Fragment>
                <TopHeader items={items} ></TopHeader> 
                    <Switch>
                        <Route exact path = '/'  component = {HomeText}/>
                        <Route path = '/details' component = {Details}/>
                        <Route path = '/cart' component = {Cart}/>
                        <Route path = '/brands' component = {BrandsList}/>
                        <Route path = '/productslist' component = {ProductsList}/>
                    </Switch>        
            </React.Fragment>
        )
     }
 }