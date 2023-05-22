import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todo.actions";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text }));
    setText("");
  };
  return (
    <div className="mt-4 flex">
      <input
        className="w-80 border-b-2 border-gray-500 text-black"
        type="text"
        placeholder="Enter your task here"
        value={text}
        onChange={handleChangeInput}
      />
      <button
        className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
