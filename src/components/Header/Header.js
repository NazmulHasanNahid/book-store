import React from 'react';
import logo from '../../img/logo.png'
import '../Books/Books.css'

const Header = () => {
    return (
        <div  className='bg-info p-5 text-white text-center header'>
            <img width="100px" src={logo} alt="" />
            <h2 className='fw-bold'> Books Store</h2>
        </div>
    );
};

export default Header;