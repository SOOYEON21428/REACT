import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfiles from './Notfiles';
import Home from './Home';
import About from './About';
import Ceo from './Ceo';
import Sub01 from './Sub01';


const App01 = () => {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        {/* <a href='' / 를 사용하면 로딩하느라 빙글 빙글 돈다. */}
                        {/* <a href='' /> 대신해서 <Link />를 사용한다*/}
                        <li><Link to='/'>Home</Link> </li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/ceo'>Ceo</Link></li>
                        <li><Link to='/sub01'>Sub01</Link></li>

                    </ul>
                </nav>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={ <Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/ceo' element={<Ceo />}></Route>
                    <Route path='/sub01' element={<Sub01 />}></Route>
                    <Route path='*' element={<Notfiles />}></Route>
                </Routes>

            </>
        </BrowserRouter>
    );
};

export default App01;