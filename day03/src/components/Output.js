import React from 'react';

const Output = (props) => {
    return (
        <div>
            <h2>Output 컴포넌트</h2>
            {props.name ? `${props.name}님이 좋아하는 과일은 ${props.fruit}입니다.` : "이름과 좋아하는 과일을 입력해주세요."}
        </div>
    );
};

export default Output;
