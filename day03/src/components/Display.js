import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h2>Display 컴포넌트</h2>
            내가 좋아하는 동물은 {props.name}입니다.
        </div>
    );
};

export default Display;
