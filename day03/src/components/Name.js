import React from 'react';

export const Name = ({ name, onInputName }) => {
    return (
        <div>
            <h2>Name 컴포넌트</h2>
            <label>이름을 입력하시오</label>
            <input type='text' value={name} onChange={onInputName} />
        </div>
    );
};
