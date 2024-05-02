import React from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const Todo = ({ todo, vusala, onUpdateTodo }) => {
  const updateTodo = () => {
    const request = {
      id: id,
      content: newInput,
    };

    onUpdateTodo(request);
    setEditable(false);
  };

  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [newInput, setNewInput] = useState(content);

  const removeTodo = () => {
    vusala(id);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        justifyContent: "space-between",
        marginTop: "30px",
        border: "1px solid blue",
        width: "300px",
        padding: "10px",
      }}
    >
      {editable ? (
        <input
          value={newInput}
          type="text"
          onChange={(e) => setNewInput(e.target.value)}
        />
      ) : (
        content
      )}
      <div style={{ display: "flex", gap: "15px" }}>
        <IoMdRemoveCircleOutline onClick={removeTodo} />

        {editable ? (
          <FaCheck onClick={updateTodo} />
        ) : (
          <FaRegEdit onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default Todo;
