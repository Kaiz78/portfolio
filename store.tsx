// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-configurestore
import { configureStore } from "@reduxjs/toolkit";
//Reducers
import homeReducer from "./src/services/homeSlice";
import allProjectsReducer from "./src/services/allProjectsSlice.tsx"

export const store = configureStore({
  reducer: {
    home: homeReducer,
    allProjects: allProjectsReducer,
  },
});
