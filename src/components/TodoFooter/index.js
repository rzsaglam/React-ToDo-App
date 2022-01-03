import React from "react";

const TodoFooter = ({
  todos,
  categoryHandler,
  activeCategory,
  clearCompleted,
}) => {
  return (
    <div className="footer">
      <span class="todo-count">
        <strong>{todos.length} </strong>
        item{todos.length > 1 && "s"} left
      </span>

      <ul class="filters">
        <li onClick={() => categoryHandler("All")}>
          <a class={activeCategory === "All" && "selected"}>All</a>
        </li>
        <li onClick={() => categoryHandler("Active")}>
          <a class={activeCategory === "Active" && "selected"}>Active</a>
        </li>
        <li onClick={() => categoryHandler("Completed")}>
          <a class={activeCategory === "Completed" && "selected"}>Completed</a>
        </li>
      </ul>
      {todos.some((todo) => todo.done === true) && (
        <button class="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;
