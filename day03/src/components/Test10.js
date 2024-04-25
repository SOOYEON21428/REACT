import React, {useState} from 'react';

const Test10 = () => {
    const [data, setData] = useState([])
    const [dto, setDto] = useState({
        name: '',
        age: ''
    })
    const {name, age} = dto
        const onInput = (e) => {
                const {name, value} = e.target
                setDto ({
                    ...dto,
                    [name]:value
                })

        }

    const onAdd = (e) => {
        
    }    
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