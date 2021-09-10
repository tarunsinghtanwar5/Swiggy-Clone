import React from 'react';
import foodImg from '../../assets/food.jpg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton';

function Header() {
    return (
        <>
            <header className="header">
                <h1>Swiggy-Clone</h1> 
                < HeaderCartButton />
            </header>
            <div className="main-image">
                <img src={foodImg}  />
            </div>
         
        </>
    )
}

export default Header
