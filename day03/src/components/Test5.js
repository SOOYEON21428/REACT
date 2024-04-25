import React, { useState } from 'react';
import { Name } from './Name'; // Update the path to your component file
import { Fruit } from './Fruit'; // Update the path to your component file
import Output from './Output'; // Update the path to your component file

const Test5 = () => {
    const [name, setName] = useState('');
    const [fruit, setFruit] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleFruitChange = (e) => {
        setFruit(e.target.value);
    };

    return (
        <div>
            <Name name={name} onInputName={handleNameChange} />
            <br />
            <Fruit name={fruit} onInputName={handleFruitChange} />
            <br />
            <Output name={name} fruit={fruit} />
        </div>
    );
};

export default Test5;
