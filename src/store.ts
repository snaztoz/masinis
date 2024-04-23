import fsReducer from "./slices/fs";
import overlayMenuReducer from "./slices/overlay_menu";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    fs: fsReducer,
    overlayMenu: overlayMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
