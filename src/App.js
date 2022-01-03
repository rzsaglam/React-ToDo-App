import React, { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);

  const newTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  useEffect(
    (e) => {
      console.log(todos);
    },
    [todos]
  );

  const handleDone = (id) => {
    const doneTodo = todos.find((todo) => todo.id === id);
    doneTodo.done = !doneTodo.done;
    const newTodo = todos.map((todo) => (todo.id === id ? doneTodo : todo));
    setTodos(newTodo);
  };

  const handleDestroy = (id) => {
    const destroyTodo = todos.filter((todo) => todo.id !== id);
    setTodos(destroyTodo);
  };

  const [category, setCategory] = useState("All");

  const categorizedToDos =
    category === "All"
      ? todos
      : category === "Active"
      ? todos.filter((todo) => todo.done === false)
      : todos.filter((todo) => todo.done === true);

  const categoryHandler = (category) => {
    setCategory(category);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.done === false));
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <TodoInput newTodo={newTodo} />
      <TodoList
        todos={categorizedToDos}
        doneTodo={handleDone}
        destroyTodo={handleDestroy}
      />
      <TodoFooter
        todos={categorizedToDos}
        categoryHandler={categoryHandler}
        activeCategory={category}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
