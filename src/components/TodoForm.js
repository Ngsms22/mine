import React from 'react';
import '../styles/TodoForm.css';

const TodoForm = () => {
  return (
    <div className="todo-form-container">
      <h2>Add New Task</h2>
      <form className="todo-form">
        <div className="form-group">
          <input
            type="text"
            className="task-input"
            placeholder="What needs to be done?"
          />
        </div>
        <div className="form-group">
          <select className="priority-select">
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            className="date-input"
          />
        </div>
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;