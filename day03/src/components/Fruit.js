import React from 'react';

export const Fruit = ({ name, onInputName }) => {
    return (
        <div>
            <h2>Fruit 컴포넌트</h2>
            <label>과일을 입력하시오</label>
            <input type='text' value={name} onChange={onInputName} />
        </div>
    );
};
