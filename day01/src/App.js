import React from 'react';
import Dog1 from './components/Dog';
import Test1 from './components/Test1.js';
import Test2 from './components/Test2.js';
import Test3 from './components/Test3.js';
import Test4 from './components/Test4.js';
import Test5 from './components/Test5.js';

const App = () => {
  return (
    <div>
      {/* 최상단에는 반드시 div 태그로 감싸주어야한다. */}
      Hello, App
      <Dog1/>
      <hr/>
      <Dog1/>
      <hr/>
      <Test1/>
      <hr/>
      <Test2/>
      <hr/>
      <Test3/>
      <hr/>
      <Test4/>
      <hr/>
      <Test5/>
    </div>
  );
};

export default App;