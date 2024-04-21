import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ContextMenuItem {
  label: string
  isDanger?: boolean
}

interface ContextMenuItemGroup {
  content: ContextMenuItem[]
}

export interface ContextMenuState {
  isOpened: boolean
  position: [number, number]
  groups: ContextMenuItemGroup[]
}

const initialState: ContextMenuState = {
  isOpened: false,
  position: [0, 0],
  groups: [],
};

export const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,

  reducers: {
    openContextMenu: (state) => {
      state.isOpened = true;
    },

    closeContextMenu: (state) => {
      state.isOpened = false;
    },

    setContextMenuPosition: (state, action: PayloadAction<[number, number]>) => {
      state.position = action.payload;
    },

    setContextMenuContent: (state, action: PayloadAction<ContextMenuItemGroup[]>) => {
      state.groups = action.payload;
    },
  },
})

export const {
  closeContextMenu,
  openContextMenu,
  setContextMenuContent,
  setContextMenuPosition,
} = contextMenuSlice.actions;

export default contextMenuSlice.reducer;
