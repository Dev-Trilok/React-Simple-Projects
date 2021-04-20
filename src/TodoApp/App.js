import React, { useState } from "react";
import "./App.css";
import TodoList from "./Component/TodoList";

export default function App() {
  const [InputList, setInputList] = useState("");

  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, InputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="Main">
      <div className="Center_Div">
        <h2> Todo App</h2>
        <input
          type="text"
          className="InputField"
          placeholder="Enter Tip here"
          onChange={itemEvent}
          value={InputList}
        />
        <button onClick={listOfItems} className="Button">
          +
        </button>
        <div>
          <ol>
            {/* <li>{InputList}</li> */}
            {Items.map((itemVal, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
