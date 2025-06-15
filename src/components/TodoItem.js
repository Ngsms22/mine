import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({ todo }) => {
  const { text, completed, priority, dueDate } = todo;

  // Format date for display
  const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-checkbox">
        <input type="checkbox" checked={completed} readOnly />
        <span className="checkmark"></span>
      </div>
      <div className="todo-content">
        <div className="todo-text">{text}</div>
        <div className="todo-meta">
          <span className={`priority-badge ${priority}`}>{priority}</span>
          <span className="due-date">{formattedDate}</span>
        </div>
      </div>
      <div className="todo-actions">
        <button className="edit-button">Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;