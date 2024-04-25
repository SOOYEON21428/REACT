import React from 'react';

const Test8Item = ({item , onView}) => {
const {id , img , title} = item

    return (
        // () => 쓰고 안쓰고의 차이??
        <li onClick={() => onView(id)}>
            <img src={img} alt={title} />
        </li>
    );
};

export default Test8Item;