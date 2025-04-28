import React from 'react';

const CartSummary = ({ cartItems = [] }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.hinta * item.quantity, 0);

    return (
        <div className="cart-summary">
            <h2>Ostoskori Yhteenveto</h2>
            <h3>Kokonaishinta: {totalPrice.toFixed(2)} €</h3>
        </div>
    );
};

export default CartSummary;