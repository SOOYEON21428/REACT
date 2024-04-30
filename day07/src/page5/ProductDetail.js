import React from 'react';

const ProductDetail = () => {
    return (
        <div className='item'>
            <h2>고양이 상세 페이지</h2>
            <h3>제품명: {} / 가격: {}</h3>
            <p><img/></p>
            <p>제품설명</p>
            <button>Home</button>
            <button>ProductList</button>
        </div>
    );
};

export default ProductDetail;
