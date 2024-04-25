import React from 'react';

const Test8Big = ({one}) => {
    const { id, img, title} = one
    return (
        <div className='bigimg'>
            <h2>{title}</h2>
            <img src={ img } alt={ title } />
        </div>
    );
};

export default Test8Big;