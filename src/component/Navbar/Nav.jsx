import React from 'react';
import img from '../../assets/navbar1.jpg'
import './Nav.css'
const Nav = () => {
    return (
        <div className='header-nav'>
            <h1>Knowledge cafe</h1>
            <img className='heder-img' src={img} alt="" />
        </div>
    );
};

export default Nav;