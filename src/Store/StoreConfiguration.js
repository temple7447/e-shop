import { configureStore } from "@reduxjs/toolkit";
import CombineReducer from "./CombineReducer";

export const store = configureStore({
  reducer:  CombineReducer,
});