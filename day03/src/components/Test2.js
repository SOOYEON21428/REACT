import React, { useState } from 'react';

const Test2 = () => {
    const [chk, isChk] = useState(true);
    const onInputChk = (e) => {
        const { checked } = e.target;
        isChk(checked);
    };

    return (
        <div style={{ color: chk ? 'blue' : 'hotpink'}}>
            <input type='checkbox' checked={ chk } onChange={ onInputChk }/> Have a nice day!!
        </div>
    );
};

export default Test2;
