import React from 'react';

export function EmptyCart(){
    return(
        <div className = 'container text-center mt-5'>
                <div className = 'd-flex flex-column text-center font text-capitalize lead '>
                    <h2 >your cart is empty</h2>
                    <div className = 'emptyCartGif'></div>
                </div>
        </div>
    )
}