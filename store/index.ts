import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/category.slice";
import questionReducer from "./slices/question.slice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    questions: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
