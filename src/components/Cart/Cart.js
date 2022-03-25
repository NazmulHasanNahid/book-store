import React from 'react';

const Cart = ({item}) => {
    console.log(item);
    const {name } = item
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Cart;