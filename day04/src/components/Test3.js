import React from 'react';
import '../css/Test3.css'
import myStyle from '../css/Test3.module.css'

const Test3 = () => {
    return (
        <div>
            <div className='box'>Test(Test3.css)</div>
            <div className={myStyle.box}>Test(Test3.module.css)</div>
        </div>
    );
};

export default Test3;
/*
컴포넌트별로 css작성
파일명. modul.css
import 참조변수 form './파일명.module.css'
개발자
*/