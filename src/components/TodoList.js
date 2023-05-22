import React from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "../helpers/todoSelector";
import Todo from "./Todo";

const TodoList = () => {
  const { list } = useSelector((state) => state.todos);
  const tabTrigger = useSelector((state) => state.tabTrigger);
  const todoList = todoSelector(list, tabTrigger);
  return (
    <ul>
      {todoList && todoList.length ? (
        todoList.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      ) : (
        <div className="font-bold text-xl m-4">No todo yet!</div>
      )}
    </ul>
  );
};

export default TodoList;
