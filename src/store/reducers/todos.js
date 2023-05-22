import { createReducer } from "@reduxjs/toolkit";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  list: [],
};

export const todos = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD_TODO, (state, action) => {
      const { id, text } = action.payload;
      state.list.push({
        id,
        text,
        completed: false,
      });
      return state;
    })
    .addCase(TOGGLE_TODO, (state, action) => {
      const id = action.payload;
      state.list = state.list.map((i) =>
        i.id === id ? { ...i, completed: !i.completed } : i
      );
      return state;
    })
    .addCase(REMOVE_TODO, (state, action) => {
      state.list = state.list.filter((i) => i.id !== action.payload);
      return state;
    });
});
