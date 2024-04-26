import React, {useState} from 'react'; 
import Test2Sub from './Test2Sub';

const Test2 = () => {
  const [show, setShow] = useState(false);
  
  const onToggle = () => {
    setShow(!show); 
  }

  return (
    <div>
      <button onClick={onToggle}>
        {show ? '숨기기' : '보이기'}  
      </button>
      <hr />
      {show && <Test2Sub/>}
   
    </div>
  );
};

export default Test2;
