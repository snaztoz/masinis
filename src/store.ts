import fsReducer from "./slices/fs";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    fs: fsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
