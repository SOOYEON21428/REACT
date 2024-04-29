import React, { useEffect, useState, useMemo } from 'react';  

const users = [  
  {id: 1, name: '홍길동'},    
  {id: 2, name: '김수현'},
  {id: 3, name: 'cat'},
  {id: 4, name: 'DAUM'},
  {id: 5, name: '김수현'},
  {id: 6, name: 'daum'},
  {id: 7, name: '이제훈'},
  {id: 8, name: '마동석'},
  {id: 9, name: 'NAVER'},
  {id: 10, name: '김지원'}
]

const Test5 = () => {
  const [data, setData] = useState(users)
  const [text, setText] = useState('')
  
  const filtered = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(text.toLowerCase())  
    )
  }, [text])

  const onSearch = () => {
    setData(filtered)  
  }
  
  return (
      <div>
          <input 
            type="text" 
            value={text} 
            onChange={e => setText(e.target.value)}
          />
          
          <button onClick={onSearch}>검색</button>  

          <ul>
            {data.map(user => (
              <li key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
      </div>
  );
};

export default Test5;
