import React from 'react';
import './top-header.css';

 export class TopHeader extends React.Component{
     constructor(props){
        super(props);
     }

     render() {
        return (
            <div>
                <div className='top-Header'>
                    <div className="header">
                        <div className="add-card">
                        
                        </div>
                    </div>
                    <ul className="nav-menu">
                        <h1>S<span>O</span>LARIS COFFEE</h1>
                        <ul>
                            {this.props.items.map(function (item, key) {
                                return <li key={key + "key"}><a href="">{item}</a></li>;
                            })}
                        </ul>
                    </ul>
                </div>
            </div>
        )
    }
 }