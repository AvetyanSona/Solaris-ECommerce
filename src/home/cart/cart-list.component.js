import React from 'react';
import {CartItem} from './cart-item.component.js';

export function CartList ({value}){
    const{cart}=value;
    return (
    <div className = 'container-fluid'>
        {cart.map(item=>{
            return <CartItem key = {item.id} item = {item} value = {value}></CartItem>
        })}
        
    </div>
        
    )
}