import React, { useState } from 'react';
import '../css/Test3.css';
import Test03Modal from './Test03Modal';

const Test3 = () => {
    const [open, isOpen] = useState(false); // Changed the initial state to 'false'

    const onOpen = () => {
        isOpen(true); // Function to set the state to 'true' when the button is clicked
    };
    //상태변수와 함수는 같이 있어야 한다.
    const onClose = () => {
        isOpen(false); // Function to set the state to 'true' when the button is clicked
    };


    return (
        <div>
            <button onClick={onOpen}>팝업창</button>
            {
                open && <Test03Modal  onClose={onClose} /> // Changed 'Open' to 'open' for conditional rendering
            }
        </div>
    );
};

export default Test3;
