import React from 'react';
import {Title} from '../../shared/title';
import {CartColumns} from './cart-columns.component'; 
import {EmptyCart} from './empty-cart.component';
import {ProductConsumer} from '../context';
import {CartList} from './cart-list.component';
import {CartTotals} from './cart-totals.components';

export class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const{cart} = value;
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <Title name = 'Your Cart'></Title>
                                    <CartColumns></CartColumns>
                                    <CartList value = {value}></CartList>
                                    <CartTotals value = {value}></CartTotals>
                                    {/* <div><iframe src="https://www.google.com/maps/embed?pb=!4v1550606535904!6m8!1m7!1sCAoSK0FGMVFpcFAxTEJGWEE1RVYybF9SeFlya1pSeWd0WFFjaGtib1FGY1hIZkk.!2m2!1d7.777112399999999!2d98.33640009999999!3f77.16859158096904!4f0!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div> */}
                                </React.Fragment>
                            )
                        }
                        else{
                            return (<EmptyCart ></EmptyCart>);
                        }
                    } }
                </ProductConsumer>       
            </section>
            
        )
    }
}