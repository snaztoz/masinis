import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ProjectState {
  directoryPath?: string
}

const initialState: ProjectState = {};

export const projectSlice = createSlice({
  name: "project",
  initialState,

  reducers: {
    setDirectoryPath: (state, action: PayloadAction<string>) => {
      state.directoryPath = action.payload;
    },

    unsetDirectoryPath: (state) => {
      state.directoryPath = undefined;
    }
  },
});

export const { setDirectoryPath, unsetDirectoryPath } = projectSlice.actions;

export default projectSlice.reducer;
