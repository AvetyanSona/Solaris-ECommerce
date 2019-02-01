/*import React from 'react';
 export class BottomFooter extends React.Component{
     constructor(props){
        super(props);
     }
     render(){
        return(
            <h3>Hello from BottomFooter</h3>
        )
     }
 }

*/

import React, { Component } from 'react';
import {Container, ModalFooter} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export class BottomFooter extends React.Component {
    constructor(props){
        super(props);
     }

    render() {
        return (
            <Container fluid >
                <Row>
                    <Col md={4} mdOffset={4} className='footerStyle'>Newsletter</Col>
                    <Col md={4} mdOffset={4} className='footerStyle'>Lorem Ipsum is simply dummy text of printing and typesetting industry.</Col>
                </Row>
                <Row>
                    <Col md={4} mdOffset={4} className='footerStyle'>
                        <input type ='text' placeholder='Type your message'></input>
                        <Button> Subscibe</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} mdOffset={2} className='footerStyle'>
                       <Row>
                            <Col md={2}>Privacy</Col>
                            <Col md={2}>Terms</Col>
                            <Col md={2}>Shop</Col>
                            <Col md={2}>About</Col>
                            <Col md={2}>Contact</Col>
                       </Row>
                    </Col>
                </Row>
            </Container> 
         );
    }

}
