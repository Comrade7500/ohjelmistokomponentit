import React from 'react';
import CarDetails from './CarDetails';

const Home = ({ cars, addToCart }) => {
    if (!Array.isArray(cars)) {
        return <p>Virhe: Autotietoja ei voitu ladata.</p>;
    }

    return (
        <div className="car-list">
            <h1>Autokauppa</h1>
            {cars.map(car => (
                <CarDetails key={car.id} car={car} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default Home;