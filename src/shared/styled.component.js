import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
    border: 1px solid;
    border-radius: 10px;
    background-color: whitesmoke;
    background-color: ${props => (props.cart? '#eedd82':'whitesmoke')};
    width: auto;
    height: auto;
    text-align: center;
    font-family: 'Charm', cursive;
    font-size: 18px; 
    color: black;
    letter-spacing:3px;
    padding:5px 15px;
    margin:10px;
`;

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
    background:#ffffe0;
    font-size:20px;
    letter-spacing:1px;
    font-weight:bold;
}
&:hover{
    .card{
        border:1px solid rgba(0,0,0,0,2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0,2);
    }
    .card-footer{
        background:#eedd82;
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 0.5s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.card-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:5px 15px;
    border:none;
    width:auto;
    height:auto;
    background-color:#ffffe0;
    transform:translate(100%,100%);
    transition:all 0.5s linear;
}
.img-container:hover .card-btn{
    transform:translate(0,0);
    background-color:#eedd82;
    transition:all 0.5s linear;
}

`;
const IncDecButton = styled.button`
    background-color:transparent;
    font-size:16px !important;
    font-weight:bold;
    color:black !important;
    width: auto;
    height: auto;
    text-align: center;
    padding:0 8px;
    border:1.5px solid #404040;
    margin-left:3px;

&:hover{
    background-color:#404040 !important;
    color:white !important;
}

`;

const ClearCartButton = styled(Button)`
    background-color: #ff4040;
    border:2px solid #ff0000

`;


export {Button,ProductWrapper,IncDecButton,ClearCartButton};