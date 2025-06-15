import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = () => {
  // This will be replaced with actual state management later
  const sampleTodos = [
    { id: 1, text: 'Learn React Hooks', completed: false, priority: 'high', dueDate: '2025-05-01' },
    { id: 2, text: 'Build a Todo App', completed: false, priority: 'medium', dueDate: '2025-04-25' },
    { id: 3, text: 'Study CSS Flexbox', completed: true, priority: 'low', dueDate: '2025-04-20' },
  ];

  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <h2>My Tasks</h2>
        <div className="filter-controls">
          <button className="filter-button active">All</button>
          <button className="filter-button">Active</button>
          <button className="filter-button">Completed</button>
        </div>
      </div>
      <div className="todo-list">
        {sampleTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
      <div className="todo-stats">
        <span>{sampleTodos.filter(todo => !todo.completed).length} items left</span>
        <button className="clear-completed-button">Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;