import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./DataReducer";

const store = configureStore({
  reducer: dataReducer,
});

export default store;
