import React, { useState} from "react";
import TodoItem from './TodoItem';


function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  function handleNewItemChange(event) {
    setNewItem(event.target.value);
  }

  function handleClick(){
    setItems( prevItems => [ ...prevItems, newItem] );
    setNewItem("");
  }

  function deleteItem(index) {
    setItems( prevItems => prevItems.filter((item, itemIndex) =>  itemIndex!=index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={newItem} onChange={handleNewItemChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
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
