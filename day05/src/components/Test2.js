import React from 'react';

const Test2 = () => {
    const [id,seteId] = useState(1)
    const [dto,setDto] = useState({})
    const [search,setSearch] = useState({})

    const onSearch = (id) => {
        setSearch(id)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/${id}')
        .then(res => setDto(res.data))
    //}, [search])
    },[id])


    return (
        <div>
            <input type='text' value={ id } onChange={e => seteId(e.target.value)}/>
            <button onClick={()=> onSearch(id)}>검색</button>
            <hr/>
            {dto.id} / {dto.title}
        </div>
    );
};

export default Test2;