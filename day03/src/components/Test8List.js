import React from 'react';
import Test8Item from './Test8Item';

const Test8List = ({data, onView}) => {
    return (
        <div>
            <ul className='list'>
                {
                    data.map(item => < Test8Item key={ item.id } item={ item }  onView={ onView}/>)
                }
            </ul>
        </div>
    );
};

export default Test8List;