import React, {useState} from 'react';

const Test4 = () => {
    const [color, setColor] = useState('')
    const [color, setFood] = useState('')


    return (
        <div style={{margin: 30}}>
            <h2>당신이 좋아하는 색은?</h2>
            <select size='5' style={{width: '120px'}} onChange={ (e) => setColor(e.target.value) }>
                <option value='hotpink'>hotpink</option>
                <option value='magenta'>magenta</option>
                <option value='skyblue'>skyblue</option>
                <option value='red'>red</option>

            </select>
            <hr/>
            <h2>당신이 좋아하는 음식은?</h2>
            <div>
                <p>
                    <input type='radio' name='food' value='케밥' />
                    <label>케밥</label>
                </p>
                <p>
                    <input type='radio' name='food' value='마제소바' />
                    <label>마제소바</label>
                </p>
                <p>
                    <input type='radio' name='food' value='라면' />
                    <label>라면</label>
                </p>
                <p>
                    <input type='radio' name='food' value='타코' />
                    <label>타코</label>
                </p>
            </div>
        </div>
    );
};

export default Test4;