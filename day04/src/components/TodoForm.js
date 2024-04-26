import React, { useState,useRef } from 'react';
import styles from '../css/TodoForm.module.css'

const TodoForm = ({onAdd}) => {
    const [text, setText] = useState('')

    const textRef = useRef();
    
    const onInput = (e) => {
       // const {value} = e.target
       //setText(value);
       setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) return

        onAdd(text) //입력한 text data(배열)에 추가.
        setText('')

        textRef.current.focus()
    }
    return (
        <div className={styles.TodoForm}>
            <form onSubmit={onSubmit}>
                <input type='text' value={text} onChange={onInput} ref={ textRef }placeholder='해야할 일을 입력해주세요.' />
                <button type='submit'>추가</button>
            </form>
            
        </div>
    );
};

export default TodoForm;