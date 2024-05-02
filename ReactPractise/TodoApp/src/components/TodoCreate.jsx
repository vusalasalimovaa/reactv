import React from "react";
import { useState } from "react";

const TodoCreate = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 999999999999),
      content: newTodo,
    };
    setNewTodo("")
    onCreateTodo(request);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="Type..."
      />
      <button onClick={createTodo}>Add new Todo</button>
    </div>
  );
};

export default TodoCreate;
