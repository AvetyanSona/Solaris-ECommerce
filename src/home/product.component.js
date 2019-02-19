import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './context';
import {toCartButton} from '../shared/styled.component';
import {Button} from '../shared/styled.component';
import {ProductWrapper} from '../shared/styled.component';
import PropTypes from 'prop-types';

export  class Product extends React.Component {
    render() {
        console.log(this.props.product);
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className = ' col-9  mx-auto col-md-6 col-lg-4 my-5'>
                <div className = 'card'>
                    <ProductConsumer>
                        {(value) => (                       
                             <div className = 'img-container p-5' onClick = {()=> value.handleDetails(id)}>
                            <Link to = '/details' >
                                <img src = {img} alt = 'product' className = 'card-img-top'></img>
                            </Link>
                            <Button className = 'card-btn' disabled = {inCart?true:false} onClick = {()=> value.addToCart(id)}>
                            {inCart?(<p className = 'text-capitalize mb-0' disabled>{" "} in Cart</p>): (<i class="fas fa-cart-arrow-down fa-lg"></i>)}
                            </Button>   
                        </div>
                        )}
                    </ProductConsumer>
                    <div className = 'card-footer d-flex justify-content-between'>
                        <p className = 'align-self-center mb-0'>{title}</p>                 
                        <h5 className = 'font-italic mb-0'>
                            <span className = 'mr-1'>$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    }).isRequired
}
