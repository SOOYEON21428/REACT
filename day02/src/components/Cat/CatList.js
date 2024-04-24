import React from 'react';
import CatItem from './CatItem'; // Assuming CatItem is the correct component to render individual cat items
import '../../css/style.css';

const CatList = ({ data }) => {
    return (
        <ul className='list2'>
            {data.map(item => <CatItem item={item} />)}
        </ul>
    );
};

export default CatList;
