import { FileEntry } from '@tauri-apps/api/fs';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface File {
  metadata: FileEntry;
  content: string;
}

interface OpenedFilesState {
  activeFile?: string;
  files: File[];
}

const initialState: OpenedFilesState = {
  files: [],
};

export const projectSlice = createSlice({
  name: 'openedFiles',
  initialState,

  reducers: {
    setActiveFile: (state, action: PayloadAction<string>) => {
      state.activeFile = action.payload;
    },
  },
});

export default projectSlice.reducer;
