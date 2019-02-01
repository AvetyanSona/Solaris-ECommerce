import React from 'react';
import {TopHeader} from '../shared/top-header/top-header.component';
import {NewsLetter} from '../shared/news-letter.component';
import {BottomFooter} from '../shared/bottom-footer.component';
import { SliderWrapper } from './slider/slider-wrapper';
import './home.css';


let items = [
    'Strong',
    'Mixed',
    'ForDevelopers',
    'Brands',
];

export  class Home extends React.Component{
     constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'Strong Coffee',
                    desc: 'Your daily espresso',
                    image: 'https://i.pinimg.com/236x/45/cb/17/45cb17e5f42547f71022ba610eeaf438.jpg',
                },{
                    id: 2,
                    title: 'Mixed Coffee',
                    desc: 'A cup of hot cappuccino',
                    image: 'https://i.pinimg.com/236x/45/cb/17/45cb17e5f42547f71022ba610eeaf438.jpg',
                },{
                    id: 3,
                    title: 'Coffee for Developers',
                    desc: 'Code is not waiting',
                    image: 'https://i.pinimg.com/236x/45/cb/17/45cb17e5f42547f71022ba610eeaf438.jpg',
                }
            ]
        }
     }
     render(){
        return(
            <div>
                <TopHeader items={items}> </TopHeader> 
                <div> 
                    <div className='container'>                  
                        <SliderWrapper 
                            data={this.state.products}
                        // removeEvent={this.onRemoveProduct}
                        > </SliderWrapper>
                    </div>                
                </div>
                <section className = "home-container">
                    <div className = "home-welcome"><h2>WELCOME</h2></div>
                    <div className = "home-text"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                    <div className = "home-welcome-bg"></div>
                </section>               
        {/* <BottomFooter></BottomFooter> */}
            </div>
        )
     }
 }