import { useState } from 'react';

const Car = () => {
    // Đặt state
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    // Đặt hàm set state
    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }; // Cập nhật màu sắc
        });
    };

    return (
        <div>
            <h1>My brand: {car.brand}</h1>
            <p>Color: {car.color}, Model: {car.model}, Year: {car.year}.</p>
            <button type="button" onClick={updateColor}>Update color: blue</button>
        </div>
    );
};

export default Car;
