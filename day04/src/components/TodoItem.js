import React from 'react';

const TodoItem = ({item}) => {
   const {seq, text} = item

   const onDel = () => {
       console.log(seq + ' 항목 삭제');
   }

   return (
       <li>
           {text}
           <button onClick={() => onDel(seq)}>삭제</button>

       </li>
   );
};

export default TodoItem;
