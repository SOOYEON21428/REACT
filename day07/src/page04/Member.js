import React from 'react';

const Member = ({item}) => {
    const {id, name, email} = item

    const css ={
        border: '1px solid cyan',
        margin: 20,
        padding: '20px'
    }
    return (
        <div style={css}>
            <p>아이디: {id}</p>
            <h4>이름: {name}</h4>
            <h4>이메일: {email}</h4>

            <p><Link to={'/member/${id}'}>상세보기</Link></p>
            <button>상세보기</button>
        </div>


    );
};

export default Member;