import React from 'react';
import {Brand}  from './brand.component';
import {Title} from '../shared/title';
import {ProductConsumer} from './context';

export class BrandsList extends React.Component {
    constructor(props) {
        super(props);
    this.state ={
        brandsList : [
        {
            id: 1,
            title:'Starbucks',
            img:'images/starbucks.jpg',   
            info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            address:'684 8th Ave, New York, NY 10036, USA'
        },
        {
            id: 2,
            title:'Blue Bottle',
            img:'images/bottle.jpg',   
            info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            address:'279 Amsterdam Ave, New York, NY 10023'        
        },
        {
            id: 3,
            title:'The Bulldog',
            img:'images/bulldog.png',   
            info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            address:'The Bulldog Palace, Leidseplein 15, 1017 PS Amsterdam'
        },
        {
            id: 4,
            title:'CoffeeShop',
            img:'images/coffeeshop.jpg',   
            info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            address:'5, 4 Amiryan St'
        }
        
        ]
    }
    }

    render() {
        return (
            <React.Fragment>
                <div className = ''>
                    <div className = 'container mt-5'>
                        <Title name = 'brands'></Title>
                        <div className = 'row'>  
                        {
                            this.state.brandsList.map(item => {
                                return (
                                    <Brand 
                                    key={item.id} 
                                    item={item}
                                    > 
                                    </Brand>
                                )
                            })
                        }                                   
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}