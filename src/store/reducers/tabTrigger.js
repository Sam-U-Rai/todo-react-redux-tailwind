import { createReducer } from "@reduxjs/toolkit";
import { SET_TAB } from "../actionTypes";
import { TAB_TRIGGER } from "../../constants";

const initialState = TAB_TRIGGER.ALL;

export const tabTrigger = createReducer(initialState, (builder) => {
  builder.addCase(SET_TAB, (state, action) => {
    return action.payload;
  });
});
