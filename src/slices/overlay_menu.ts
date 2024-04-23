import { createSlice } from "@reduxjs/toolkit";
import type { OverlayMenuItemGroup } from "../contracts/overlay_menu";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface OverlayMenuState {
  isOpened: boolean
  position: [number, number]
  groups: OverlayMenuItemGroup[]
}

const initialState: OverlayMenuState = {
  isOpened: false,
  position: [0, 0],
  groups: [],
};

export const overlayMenuSlice = createSlice({
  name: "overlayMenu",
  initialState,

  reducers: {
    openOverlayMenu: (state) => {
      state.isOpened = true;
    },

    closeOverlayMenu: (state) => {
      state.isOpened = false;
    },

    setOverlayMenuPosition: (state, action: PayloadAction<[number, number]>) => {
      state.position = action.payload;
    },

    setOverlayMenuContent: (state, action: PayloadAction<OverlayMenuItemGroup[]>) => {
      state.groups = action.payload;
    },
  },
})

export const {
  closeOverlayMenu,
  openOverlayMenu,
  setOverlayMenuContent,
  setOverlayMenuPosition,
} = overlayMenuSlice.actions;

export default overlayMenuSlice.reducer;
