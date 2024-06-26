import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './css/styles.css'
import Main from './page5/Main';
import ProductList from './page5/ProductList';
import ProductDetail from './page5/ProductDetail';

const App05 = () => {
    return (
        <BrowserRouter>
            <>
                <nav className='menunav'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/productList'>ProductList</Link></li>

                    </ul>
                </nav>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Main />}></Route>
                    <Route path='/productList'>
                       <Route index element={<ProductList />} />
                       <Route path=':productId' element={<ProductDetail />} />
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App05;