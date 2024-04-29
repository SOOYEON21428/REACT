import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import NavBar from './page02/NavBar';
import Home from './page02/Home';
import About from './page02/About';
import Ceo from './page02/Ceo';
import Notfiles from './page02/Notfiles';
import Sub01 from './page02/Sub01'; // Import Sub01
import '../src/css/style02.css';

const App02 = () => {
    return (
        <div>
            <BrowserRouter>
                <>
                    <NavBar />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/ceo' element={<Ceo />} />
                        <Route path='/sub01' element={<Sub01 />} />
                        <Route path='*' element={<Notfiles />} />
                    </Routes>
                </>
            </BrowserRouter>
        </div>
    );
};

export default App02;
