import React, { useState, useEffect } from 'react';
import CarDetails from './components/CarDetails';
import ShoppingCart from './components/ShoppingCart';
import './styles/app.css';

function App() {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/autoja') // Päivitä oikea URL
            .then((res) => res.json())
            .then((data) => {
                setCars(data || []); 
            })
            .catch((err) => console.error('Virhe tietojen haussa:', err));
    }, []);

    const addToCart = (car) => {
        setCart((prevCart) => {
            const existingCar = prevCart.find(item => item.id === car.id);
            if (existingCar) {
                return prevCart.map(item =>
                    item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...car, quantity: 1 }];
        });
    };

    const removeFromCart = (carId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== carId));
    };

    return (
        <div className="app">
            <h1>Autokauppa</h1>
            <div className="car-list">
                {cars.map(car => (
                    <CarDetails key={car.id} car={car} addToCart={addToCart} />
                ))}
            </div>
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
    );
}

export default App;