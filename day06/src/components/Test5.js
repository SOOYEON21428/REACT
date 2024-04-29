import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    dto: {},
    error: null,
    loading: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                dto: action.payload,
                error: null,
                loading: false
            };
        case 'ERROR':
            return {
                dto: {},
                error: '404 에러, 데이터를 가져오지 못했습니다.',
                loading: true
            };
        default:
            return state;
    }
};

const Test5 = () => {
    const [id, setId] = useState(1);
    const [search, setSearch] = useState(1);
    const [state, dispatch] = useReducer(reducer, initialState);

    const onSearch = (id) => {
        setSearch(id);
    };

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
        axios.get(url)
            .then(response => {
                dispatch({ type: 'SUCCESS', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'ERROR' });
            });
    }, [id]);

    return (
        <div>
            <h3>
                ID 입력 (1~5000) : <input type='text' value={id} onChange={e => setId(e.target.value)} />
                <button onClick={() => onSearch(id)}>검색</button>
            </h3>
            <h2>
                {state.loading ? '로딩 중' : state.dto.title}
                {!state.loading && <img src={state.dto.thumbnailUrl} alt="Thumbnail" />}
            </h2>
            <p>
                {state.error ? state.error : id}
            </p>
        </div>
    );
};

export default Test5;
