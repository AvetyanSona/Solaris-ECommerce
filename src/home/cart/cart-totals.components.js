import React from 'react';
import {ClearCartButton} from '../../shared/styled.component';

export  function CartTotals ({value}) {
    console.log(value);
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return(
     
        <React.Fragment>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-10 mt-2 ml-sm-5 ml-md-auto col--sm-8 text-capitalize text-right'>
                        <ClearCartButton onClick = {()=>clearCart()}>Clear Cart</ClearCartButton>
                        <h5>
                            <span>Total: </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span>Delivery Charges: </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className = 'font text-uppercase'>total: </span>
                            <strong className = 'font'>$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}