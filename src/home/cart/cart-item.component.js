import React from 'react';
import {IncDecButton} from '../../shared/styled.component';

export function CartItem ({item,value}){
    const{id,title,img,price,total,count} = item;
    const{increment,decrement,removeItem} = value;
    return (
        <div className = 'row  my-4 text-capitalize text-center'>
            <div className = 'col-10 mx-auto col-lg-2'>
                <img src = {img} style = {{width:'80px',height:'80px'}} className = 'img-fluid' alt = 'product'></img>
            </div>
            <div className = 'col-10 mx-auto col-lg-2'>
                <span className = 'd-lg-none'>product: </span>
                {title}
            </div>
            <div className = 'col-10 mx-auto col-lg-2'>
                <span className = 'd-lg-none'>price: </span>
                {price}
            </div>
            <div className = 'col-10 mx-auto col-lg-2 my-2 my-lg-0'> 
                <div className = 'd-flex justify-content-center'>
                    <IncDecButton onClick = {()=> decrement(id)}>-</IncDecButton>
                    <IncDecButton>{count}</IncDecButton>
                    <IncDecButton onClick = {()=> increment(id)}>+</IncDecButton>
                </div>
            </div>
            <div className = 'col-10 mx-auto col-lg-2'>
                <div className = 'trash-icon' onClick = {()=>removeItem(id)}>
                    <i className="fas fa-trash-alt"></i>
                </div>    
            </div> 
            <div className = 'col-10 mx-auto col-lg-2'>
                <strong className = 'd-lg-none'>product total:</strong>  
                <strong> $ {total}</strong>  
            </div> 
        </div>
       
    )
}