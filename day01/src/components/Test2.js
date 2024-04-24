import React from 'react';

const Test2 = () => {
    let title = '신상명세서'
    const name ='홍길동'
    const age= 25
    const addr= '서울'

    const css1 = {
        color: 'red'
        ,fontSize: '30pt'
        ,padding: 20
        ,backgroundColor: 'yellow'
        ,margin: 10
        ,border: '3px soild #000'
    }

    const css2 = {
        width: '400px'
        ,color: 'white'
        ,backgroundColor: 'hotPink'
        ,fontSize: '20pt'
        ,padding: 15
        ,margin: 30
    }

    return (
       <div>
            <h2> JSX영역 </h2>
            <h2 style={css1}> {title} </h2>
            <ul>
                <li style = {css2}>이름: {name}</li>
                <li style={{ backgroundColor: 'yellowgreen'
                            ,padding:15
                            ,margin: 'auto' }}>
                    나이: {age}살 {age>20 ?'성인':'청소년'}
                </li>
                <li>주소 {addr}</li>
            </ul>
        </div>
    );
};

export default Test2;