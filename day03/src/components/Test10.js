import React from 'react';

const Test10 = () => {
    return (
        <div>
            <form>
                이름 : <input type='text' name='name' value={name} onChange={onInput} />
                <br/>
                나이 : <input type='text' name='age' value={age} onChange={onInput} />
                <br/>
                <button type='submit'>추가</button>
            </form>
        </div>
    );
};

export default Test10;