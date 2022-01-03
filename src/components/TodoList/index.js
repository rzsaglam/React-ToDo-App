import React from "react";

const TodoList = ({ todos, doneTodo, destroyTodo }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "completed" : null}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => doneTodo(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => destroyTodo(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
