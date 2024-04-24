import React, { useState } from 'react';
import CatList from './CatList';
import dataList from './CatData'; // Assuming CatData is the correct file name
import '../../css/reset.css';
import '../../css/style.css';

const Cat = () => {
    const [data, setData] = useState(dataList);

    return (
        <>
            <section className='business'>
                <div className='inner'>
                    <h2>냐옹쓰</h2>
                    <p>뤠옹이들</p>
                    <CatList data={data} />
                </div>
            </section>
        </>
    );
};

export default Cat;
