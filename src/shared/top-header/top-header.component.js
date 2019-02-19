import React from 'react';
import './top-header.css';
import {Link} from 'react-router-dom';
import {Button} from '../styled.component';

 export class TopHeader extends React.Component{
     constructor(props){
        super(props);
     }  
     render() {
        return (
            <React.Fragment>
                <div className='top-Header'>
                    <div className="header">
                    <Link to ='/cart'>
                        <Button>
                        <i className="fas fa-cart-arrow-down fa-lg"></i>
                                <span>Cart</span>
                        </Button>
                    </Link>
                    </div>
                    <ul className="nav-menu">                       
                         <Link to = '/'>
                            <h1>S<span>O</span>LARIS COFFEE</h1>
                         </Link>                           
                        <Link to ='/productslist'>
                            <ul>
                                {this.props.items.map(function (item, key) {
                                    return (<li className = 'nav-link' key={key + "key"}><a href="">{item}</a></li>);
                                })}
                              <Link to ='/brands'><li className = 'nav-link'><a>Brands</a></li></Link>
                            </ul>
                        </Link>

                    </ul>
                </div>
            </React.Fragment>
        )
    }
 }