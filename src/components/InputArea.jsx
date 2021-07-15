import React, { useState } from 'react'

function InputArea( props ) {
  const [ inputText , setInputText] = useState('');

  function handleChange(event) {
    const todoInput = event.target.value;
    console.log("update todo input: " + todoInput);
    setInputText(todoInput);
  }

  function saveNewTodo() {
    props.saveNewTodo(inputText)
    setInputText("");
  }

    return (
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
        <button onClick={()=> saveNewTodo()}>
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea
