import React from 'react';
import foodImg from '../../assets/food.jpg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return (
        <>
            <header className="header">
                <h1>Swiggy-Clone</h1> 
                < HeaderCartButton onCart={props.onCart} />
            </header>
            <div className="main-image">
                <img src={foodImg}  />
            </div>
         
        </>
    )
}

export default Header
