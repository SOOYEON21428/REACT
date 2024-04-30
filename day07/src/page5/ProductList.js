import React from 'react';
import data from './data'

const ProductList = () => {
    return (
        <div className='products'>
            <h2>냐옹이의 세상</h2>
            <div>
                {
                    data.map(item => <article key={ item.id}>
                        <Link>
                        <h3>{item.name}</h3>
                        <p>
                            <img src={'item.photo'} alt={item.name} />
                        </p>
                        </Link>
                    </article>)
                }
            </div>
        </div>

    );
};

export default ProductList;