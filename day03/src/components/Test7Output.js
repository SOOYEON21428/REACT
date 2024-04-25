// Test7Output.js  

import React from 'react';

const Test7Output = ({ formData }) => {

  const { name } = formData;

  return (
    <div>
      {name}님 설문조사 감사합니다!
    </div>
  );
};

export default Test7Output;

