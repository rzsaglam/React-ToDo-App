import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoInput = ({ newTodo }) => {
  const [text, setText] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      text: text,
      done: false,
    };
    newTodo(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done"
          onChange={onChange}
          autoFocus
        />
      </form>
    </div>
  );
};

export default TodoInput;
