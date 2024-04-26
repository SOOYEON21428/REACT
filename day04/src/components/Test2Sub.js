import React, { useState, useEffect } from 'react';



const Test2Sub = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            onMove(e);
        };

        console.log('useEffect');
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            console.log('Cleanup');
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{ border: '1px solid #000', width: 400, padding: 30, margin: 15 }}>
                <h3>x축: {x}, Y축: {y}</h3>
            </div>
        </div>
    );
};

export default Test2Sub;
