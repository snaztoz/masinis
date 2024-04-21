import contextMenuReducer from "./slices/context_menu";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    contextMenu: contextMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
