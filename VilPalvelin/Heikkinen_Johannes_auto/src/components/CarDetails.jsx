import React from 'react';

const CarDetails = ({ car, addToCart }) => {
    if (!car) {
        return <p>Ladataan auton tietoja...</p>;
    }

    const handleAddToCart = () => {
        addToCart(car);
    };

    return (
        <div className="car-details">
            <h2>{car.nimi} {car.malli}</h2>
            <p><strong>Valmistusvuosi:</strong> {car.valmistusvuosi}</p>
            <p><strong>Hinta:</strong> {car.hinta} €</p>
            <p><strong>Ominaisuudet:</strong> {(car.optiot || []).join(', ')}</p>
            <p><strong>Lisätiedot:</strong> {car.lisätiedot?.voimanlähde}</p>
            <button onClick={handleAddToCart}>Lisää ostoskoriin</button>
        </div>
    );
};

export default CarDetails;