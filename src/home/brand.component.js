import React from 'react';
import {ProductConsumer} from  './context';
import {Link} from 'react-router-dom';
import {Button} from '../shared/styled.component';
import {brandList} from '../data';

export  class Brand extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props;
        return (
                    <div className = 'container py-5 my-0'>
                        <div className = 'row'>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-10 mx-auto col-md-6 my-3'>
                            <img src = {item.img} className = 'img-fluid' alt= 'brand_logo'></img>
                            </div>
                            <div className = 'col-10 mx-auto col-md-6 my-3 text-capitalize text-left border-left '>
                                <h3>{item.title}</h3>
                                <h4 className = 'text-capitalize text-muted mt-3 mb-2'>address : <span className = 'text-capitalize lead'>{item.address}</span></h4>
                                <p className = 'text-muted '>{item.info}</p>


                                {/*Buttons*/}
                                 <div>
                                    <Link to = '/productslist'>
                                        <Button> Products</Button>
                                    </Link>
                                                                    
                                </div> 
                            </div>                            
                        </div>
                    </div>
            )
        }
    }

