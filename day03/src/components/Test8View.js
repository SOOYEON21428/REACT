import React from 'react';
import Test08Big from './Test8Big';
import Test08List from './Test8List';

const Test08View = ({data , one , onView}) => {
    return (
        <div className='bigview'>
            <Test08Big data={data} one={one} onView={onView}/>
            <Test08List data={data} one={one} onView={onView}/>
        </div>
    );
};

export default Test08View;