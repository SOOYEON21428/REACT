// Test7Main.js

import React, { useState } from 'react';

import Test7Input from './Test7Input';
import Test7Print from './Test7Print';
import Test7Output from './Test7Output';

const Test7Main = () => {

  const [formData, setFormData] = useState(null);
  const [step, setStep] = useState(1);

  const handleInputSubmit = (data) => {
    setFormData(data);
    setStep(2);
  };  

  const handlePrintNext = () => {
    setStep(3);
  };

  const handleOutputPrevious = () => {
    setStep(2);
  };

  return (
    <div>
      {step === 1 && 
        <Test7Input onSubmit={handleInputSubmit} />}

      {step === 2 && 
        <Test7Print
          formData={formData}
          onNext={handlePrintNext}  
        />}

      {step === 3 && 
        <Test7Output
          formData={formData}  
          onPrevious={handleOutputPrevious} 
        />}
    </div>
  );  
};

export default Test7Main;
