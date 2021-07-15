import React, { useState} from "react";
import TodoItem from './TodoItem';
import InputArea from './InputArea';


function App() {

  
  const [items, setItems] = useState([]);

  

  function addNewTodo(newTodo){
    setItems( prevItems => [ ...prevItems, newTodo] );
  }

  function deleteItem(index) {
    setItems( prevItems => prevItems.filter((item, itemIndex) =>  itemIndex!=index));
  }

  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
          saveNewTodo = { addNewTodo }
      />
      <div>
        <ul>
          {items.map ( (todoItem, index) => {
            return <TodoItem item={todoItem} index={index} onClick={deleteItem}/>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
