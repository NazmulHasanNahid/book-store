import React from 'react';
import './Cart.css'

const Cart = ({item}) => {
    console.log(item);
    const {name , img} = item
    return (
        <div >
            <div className='item-container'>
           
            <p className='text-secondary'> <img className='bg-info shadow-lg' src={img} alt="" />  {name}</p>
            </div>
            
            
        </div>
    );
};

export default Cart;