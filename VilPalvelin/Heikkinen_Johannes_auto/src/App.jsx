import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCartPage from './components/ShoppingCartPage';
import './styles/app.css';

function App() {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/autoja') // Oikea URL
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log('Fetched data:', data); // Debugging
                setCars(data || []); // Aseta autot tilaan
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
            <header>
                <nav>
                    <Link to="/">Etusivu</Link> | <Link to="/ostoskori">Ostoskori</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home cars={cars} addToCart={addToCart} />} />
                <Route path="/ostoskori" element={<ShoppingCartPage cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
        </div>
    );
}

export default App;