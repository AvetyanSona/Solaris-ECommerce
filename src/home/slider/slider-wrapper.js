import React from 'react';
import { SliderItem } from './slider-item';

export class SliderWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='row'>
            {
                this.props.data.map(item => {
                    return (
                        <SliderItem 
                         key={item.id} 
                         item={item}
                        // removeEvent={this.props.removeEvent}
                        > 
                        </SliderItem>
                    )
                })
            }
            </div>
            
        )
    }
}