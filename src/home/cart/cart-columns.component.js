import React from 'react';

export function CartColumns(){
    return(
        <div className = 'container-fluid text-center d-none d-lg-block px-0'>
            <div className = 'row mx-0'>
                <div className = 'col-10 mx-auto col-lg-2'>
                    <p className = 'text-uppercase font-weight-bold'>products</p>
                </div>
                <div className = 'col-10 mx-auto col-lg-2'>
                    <p className = 'text-uppercase font-weight-bold'>name</p>
                </div>
                <div className = 'col-10 mx-auto col-lg-2'>
                    <p className = 'text-uppercase font-weight-bold'>price</p>
                </div>
                <div className = 'col-10 mx-auto col-lg-2'>
                    <p className = 'text-uppercase font-weight-bold'>quantity</p>
                </div>
                <div className = 'col-10 mx-auto col-lg-2'>
                    <p className = 'text-uppercase font-weight-bold'>remove</p>
                </div>
                <div className = 'col-10 mx-auto col-lg-2'>
                    <p className = 'text-uppercase font-weight-bold'>total</p>
                </div>
            </div>
        </div>
    )
}