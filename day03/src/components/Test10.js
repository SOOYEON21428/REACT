import React, { useRef, useState } from 'react';

const Test10 = () => {
    const [data, setData] = useState([]);
    const [dto, setDto] = useState({
        name: '',
        age: ''
    });
    const { name, age } = dto;

    const nameRef = useRef();
    const seq = useRef(1);

    const onInput = (e) => {
        const { name, value } = e.target;
        setDto({
            ...dto,
            [name]: value
        });
    };

    const onAdd = (e) => {
        e.preventDefault();

        if (!name || !age) return;

        setData([
            ...data,
            {
                seq: seq.current,
                name: name,
                age: age
            }
        ]);
        seq.current++;
        setDto({
            name: '',
            age: ''
        });
        nameRef.current.focus();
    };

    return (
        <div>
            <form onSubmit={onAdd}>
            이름 : <input type='text' name='name' value={name} onChange={onInput} ref={nameRef} />

                <br/>
                나이 : <input type='text' name='age' value={age} onChange={onInput} />
                <br/>
                <button type='submit'>추가</button>
            </form>
            <hr/>
            {
                data.map((item, index) => (
                    <li key={index}>
                        {item.seq}/{item.name} / {item.age}
                    </li>
                ))
            }
        </div>
    );
};

export default Test10;
