import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const updateTodo = (newInput) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newInput.id) {
        return todo;
      }
      return newInput;
    });

    setTodos([...updatedTodos]);
  };

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  console.log(todos);

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  return (
    <>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </>
  );
}

export default App;
