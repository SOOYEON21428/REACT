// Test7Print.js

import React from 'react';

const Test7Print = ({ formData, onNext }) => {
  
  const { name, age, address, phone } = formData;
  
  return (
    <div>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
      <div>주소: {address}</div>  
      <div>번호: {phone}</div>

      <button onClick={onNext}>다음</button> 
    </div>
  );
};

export default Test7Print;

