import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onRemoveTodo, onUpdateTodo }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            vusala={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
};

export default TodoList;
