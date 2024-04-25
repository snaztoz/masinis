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
    }
  },
});

export const { setDirectoryPath } = projectSlice.actions;

export default projectSlice.reducer;
