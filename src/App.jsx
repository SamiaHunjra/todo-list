import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", date: "2023-10-01" },
    { id: 2, title: "Build a Todo App", date: "2023-10-02" },
    { id: 3, title: "Deploy the App", date: "2023-10-03" },
  ]);

  const addTodo = (title, date) => {
    const newTodo = {
      id: Date.now(),
      title,
      date,
    };
    setTodos([...todos, newTodo]);
  };

  const DeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar />
      <p className="fs-1 fw-bold text-center p-5">My Todo</p>
      <div className="container col-6 col-md-6">
        <AddTodo onAdd={addTodo} />
        <TodoItems todos={todos} onDelete={DeleteTodo} />
      </div>
    </>
  );
};

export default App;
