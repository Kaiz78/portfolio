// reducers/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from "./homeSlice";
import allProjectsReducer from "./allProjectsSlice";
import langReducer from './langReducer';


const rootReducer = combineReducers({
  home: homeReducer,
  allProjects: allProjectsReducer,
  lang: langReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
