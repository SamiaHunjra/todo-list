import React from "react";

const TodoItems = ({ todos, onDelete, onEdit }) => {
  return (
    <div className="container">
      {todos.map((todo) => (
        <div key={todo.id} className="row mb-2 p-2 border rounded">
          <div className="col-4 col-md-4">{todo.title}</div>
          <div className="col-4 col-md-4">{todo.date}</div>
          <div className="col-4 col-md-4 d-flex gap-1 justify-content-end">
            <button className="btn btn-warning" onClick={() => onEdit(todo)}>
              Edit
            </button>
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
