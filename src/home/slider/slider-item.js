import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../../shared/styled.component';

export class SliderItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
   /* handleRemove = () => {
        this.props.removeEvent(this.props.item.id);
    }*/
    
    render() {
        const { item } = this.props;
        return (
            <div key={item.id} className='item col'>
                <h2>{item.title}</h2>
                <img src={item.image} />
                <p>{item.desc}</p>
                <Link to = '/productslist'>
                    <Button onClick={this.handleRemove}>Drink Now!</Button>
                </Link>
                
            </div>
        )
    }
}