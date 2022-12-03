import React, { useState } from "react";
import Todoitem from "../Component/Todoitem";
import Input from "./Input";

function App() {

  const [items, setItems] = useState([]);



  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
   
  }

  function deleteItem(id){
    setItems(prev=>{
     return prev.filter((item,index)=>{
        return index!==id
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input
      addItem={addItem}/>
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <Todoitem
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
