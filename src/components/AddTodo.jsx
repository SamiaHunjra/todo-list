import React, { useState, useEffect } from "react";

const AddTodo = ({ onAdd, onUpdate, editingTodo }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDate(editingTodo.date);
    } else {
      setTitle("");
      setDate("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) {
      alert("Title and date are required");
      return;
    }

    if (editingTodo) {
      onUpdate(editingTodo.id, title, date);
    } else {
      onAdd(title, date);
    }

    setTitle("");
    setDate("");
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-5 col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-5 col-md-5">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-2 col-md-2">
          <button className="btn btn-primary" onClick={handleSubmit}>
            {editingTodo ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
