import React from 'react';
import CartSummary from './CartSummary';

const ShoppingCart = ({ cart, removeFromCart }) => {
    return (
        <div className="shopping-cart">
            <h2>Ostoskori</h2>
            {cart.length === 0 ? (
                <p>Ostoskorisi on tyhjä.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.nimi} - {item.quantity} x {item.hinta} €
                            <button onClick={() => removeFromCart(item.id)}>Poista</button>
                        </li>
                    ))}
                </ul>
            )}
            <CartSummary cartItems={cart} />
        </div>
    );
};

export default ShoppingCart;