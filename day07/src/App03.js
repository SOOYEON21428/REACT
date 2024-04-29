import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page03/Home'
import About from './page03/About'
import Profile from './page03/Profile'



const data =[
    {title: 'html', info: 'HTML입니다.'},
    {title: 'css', info: 'CSS입니다.'},
    {title: 'javascript', info: 'JAVASCRIPT입니다.'},
    {title: 'react', info: 'REACT입니다.'},
    {title: 'vue', info:'VUE입니다.'}
]

const App03 = () => {
    return (
     <BrowserRouter>
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Profile</Link></li>

                <li><Link to='/front/html'>HTML</Link></li>
                <li><Link to='/front/css'>CSS</Link></li>
                <li><Link to='/front/javascript'>JavaScript</Link></li>
                <li><Link to='/front/react'>REACT</Link></li>
                <li><Link to='/front/vue'>VUE</Link></li>

            </ul>
        </>
        {/* 화면에 보이는 영역 */}
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/' element={ <About />} />
            <Route path='/' element={ <Profile />} />
            <Route path='/front/:name' element={ <Front />} />

        </Routes>

     </BrowserRouter>
    );
};

export default App03;