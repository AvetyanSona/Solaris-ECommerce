import React from 'react';
import {Product}  from './product.component';
import {Title} from '../shared/title';
import {ProductConsumer} from './context';

export class ProductsList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className = ''>
                    <div className = 'container mt-5'>
                        <Title name = 'products list'></Title>
                        <div className = 'row'>
                            <ProductConsumer>
                                {value=>{
                                    return (value.products.map(product=>{
                                        return (<Product key = {product.id} product ={product}></Product>)
                                    })
                                    )
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}