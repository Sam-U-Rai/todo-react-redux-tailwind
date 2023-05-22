import { createAction } from "@reduxjs/toolkit";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";

export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const removeTodo = createAction(REMOVE_TODO);
