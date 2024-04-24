import { FileEntry } from "@tauri-apps/api/fs";
import { Fs } from "../libs/fs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface FsState {
  fileTree?: FileEntry[]
}

const initialState: FsState = {};

export const readDirectoryContent = createAsyncThunk(
  "fs/readDirContentStatus",
  Fs.readDirectoryContent,
);

export const fsSlice = createSlice({
  name: "fs",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(readDirectoryContent.fulfilled, (state, action) => {
        state.fileTree = action.payload;
      });
  },
})

export default fsSlice.reducer;
