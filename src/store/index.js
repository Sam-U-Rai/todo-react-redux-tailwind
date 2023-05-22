import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./reducers/todos";
import { tabTrigger } from "./reducers/tabTrigger";

const store = configureStore({
  reducer: {
    todos,
    tabTrigger,
  },
});

export default store;
