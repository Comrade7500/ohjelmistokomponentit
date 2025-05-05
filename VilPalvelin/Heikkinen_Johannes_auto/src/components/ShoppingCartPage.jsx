import React from 'react';
import ShoppingCart from './ShoppingCart';

const ShoppingCartPage = ({ cart, removeFromCart }) => {
    return (
        <div className="shopping-cart-page">
            <h1>Ostoskori</h1>
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
};

export default ShoppingCartPage;