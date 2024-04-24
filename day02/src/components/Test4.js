import React, { useState } from 'react';

const Test4 = () => {
    const [visible, setVisible] = useState(false);

    const showBox = () => {
        setVisible(true);
    };

    const hideBox = () => {
        setVisible(false);
    };
    const onToggle = () => {
        setVisible( !visible )
    }

    return (
        <div>
            <button onClick={showBox}>보이기</button>
            <button onClick={hideBox}>숨기기</button>
            <button onClick={ onToggle}>{ visible ? '숨기기' : '보이기' }</button>
            <hr />
            {
                visible ? <div style={{width: 300, height: 300, margin: 20, backgroundColor:'hotpink'}}></div> : null
            }
        </div>
    );
};

export default Test4;
