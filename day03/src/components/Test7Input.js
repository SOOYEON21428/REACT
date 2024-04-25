// Test7Input.js

import React, { useState } from 'react';

const Test7Input = ({onSubmit}) => {

  const [form, setForm] = useState({
    name: '',
    age: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({
     ...form,  
     [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름</label>
        <input 
          name="name"
          value={form.name}
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>나이</label>
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
        />  
      </div>

      <div>
        <label>주소</label>
        <input 
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>전화번호</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}  
        />
      </div>

      <button type="submit">다음</button>
    </form>

  );
}

export default Test7Input;
