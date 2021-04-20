import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  const onDelete = (todo) => {
    console.log("Deleted", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("I am todo ", title, desc);
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to Market",
      desc: "Go market to get it done ",
    },
    {
      sno: 2,
      title: "todo 2",
      desc: "description 2 ",
    },
    {
      sno: 3,
      title: "to do 3",
      desc: "description 3  ",
    },
    {
      sno: 4,
      title: "to do 4",
      desc: "description 4  ",
    },
  ]);

  return (
    <React.Fragment>
      <Header title="Todo's List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
