import React, { useState } from 'react';

const Test3 = () => {
    const [name , setName] = useState('홍길동');
    const [age, setAge] = useState('25');

    const onName = () => {
        setName('코난');
    };

    const onAge = () =>{
        setAge('30');
    };

    const onColor = () => {
        // Add functionality here if needed
        // For now, let's just change the background color to yellow
        document.body.style.backgroundColor = 'yellow';
    };
  
    return (
        <div>
            <h2 style={{ backgroundColor: 'yellow' }}>
                이름 : { name } / 나이 : { age }
            </h2>
            <p>
                <button onClick={onName}>코난으로 이름 변경</button>
                <button onClick={onAge}>나이를 30살로 변경</button>
                <button onClick={() => setAge('35')}>나이를 35로 변경</button>
                <button onClick={onColor}>노랑으로 변경</button>
            </p>
        </div>
    );
};

export default Test3;
