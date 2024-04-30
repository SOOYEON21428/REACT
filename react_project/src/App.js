import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from './components/Register'; // (경로에 맞게 조정)
import Login from './components/Login'; // (경로에 맞게 조정)
import Write from './components/Write'; // (경로에 맞게 조정)
import Home from './components/Home'; // (경로에 맞게 조정)
import List from './components/List'; // (경로에 맞게 조정)

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"><img src="logo.png" alt="Home"/></Link>
        <Link to="/register">회원가입</Link>
        <Link to="/login">로그인</Link>
        <Link to="/write">글쓰기</Link>
        <Link to="/list">목록</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
