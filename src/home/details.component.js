import React from 'react';
import {ProductConsumer} from  './context';
import {Link} from 'react-router-dom';
import {Button} from '../shared/styled.component';
import {Product} from './product.component';
import {detailProduct} from '../data';

export  class Details extends React.Component {

    
    render() {
        return (
            <ProductConsumer>
            {(value)=>{
                console.log(value);
                const {id,company,img,info,price,title,inCart} = value.detailProduct;
                return (
                    <div className = 'container py-5 my-0'>
                        <div className = 'row'>
                        {/*Title*/}
                            <div className = 'col-10 mx-auto text-center text-slanted my-5'>
                                <h1 className = 'text-capitalize font'>{title}</h1>
                            </div>
                        </div>
                         {/*Product Info*/}
                        <div className = 'row'>
                            <div className = 'col-10 mx-auto col-md-6 my-3 '>
                            <img src = {img} className = 'img-fluid' alt= 'product'></img>
                            </div>
                            {/*Product Text*/}
                            <div className = 'col-10 mx-auto col-md-6 my-3 text-capitalize text-left'>
                                <h3>type: {title}</h3>
                                <h4 className = 'text-uppercase text-muted mt-3 mb-2'>made by : <span className = 'text-uppercase'>{company}</span></h4>
                                <h4>
                                    <strong>
                                        price : <span>$</span>{price}
                                    </strong>
                                </h4>
                                <p className = 'text-uppercase font-weight-bold mt-3 mb-0'>
                                quick overview :
                                </p>
                                <p className = 'text-muted '>{info}</p>
                                {/*Buttons*/}
                                <div>
                                    <Link to = '/productslist'>
                                        <Button> Back to Products</Button>
                                    </Link>
                                    
                                    <Button cart disabled = {inCart?true:false}  onClick = {()=>{
                                        value.addToCart(id);
                                    }}>
                                        {inCart?'inCart' : 'Add to Cart'}
                                    </Button>
                                    
                                </div>
                            </div>                            
                        </div>
                    </div>
                )
            }}
            </ProductConsumer>
        )
    }
}



