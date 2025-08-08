import React from "react";

const TodoItems = ({ todos, onDelete }) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <div key={todo.id} className="row mb-2 p-2 border rounded">
          <div className="col-5 col-md-5">{todo.title}</div>
          <div className="col-5 col-md-5">{todo.date}</div>
          <div className="col-2 col-md-2">
            <button
              className="btn btn-danger"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
