import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../store/actions/todo.actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleChangeStatus = () => dispatch(toggleTodo(todo.id));
  const handleDelete = () => dispatch(removeTodo(todo.id));

  return (
    <li className="p-2 rounded-lg">
      <div className="flex align-middle flex-row justify-between">
        <div className="p-2">
          <input
            type="checkbox"
            className="h-6 w-6 "
            value="true"
            onChange={handleChangeStatus}
            checked={todo.completed}
          />
        </div>
        <div className="p-2">
          <p
            className={
              todo.completed ? "text-lg line-through text-gray-400" : "text-lg"
            }
          >
            {todo.text}
          </p>
        </div>
        <button
          className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg w-100"
          onClick={handleDelete}
        >
          Remove
        </button>
      </div>
      <hr className="mt-2" />
    </li>
  );
};

export default Todo;
