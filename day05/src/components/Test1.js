import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Test1 = () => {
    const [data, setData] = useState([])

    /*
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => setData(res))

    }, [])
    
   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setData(res.data))
   },[])
  
  //3번
  useEffect(()=> {
    const getData = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setData(data)
    }
    getData()
  },[])
   */
  //4번
  useEffect(() => {
    const getData = async() => {
        const res = awaitaxios.get('https://jsonplaceholder.typicode.com/posts')
    }
    getData()

  },[]) 
    return (
        <div>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} /{item.title}
                    </li>)
                    
                }
            </ul>
        </div>
    );
};
 

export default Test1;