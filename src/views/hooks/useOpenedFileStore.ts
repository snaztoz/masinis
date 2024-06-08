import { FileEntry, readTextFile } from '@tauri-apps/api/fs';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// Represents an opened file that will be included inside
// the tab list.
interface OpenedFile {
  name: string;
  path: string;
  content?: string;
  touchedAt: number;
}

interface OpenedFileState {
  files: OpenedFile[];
  openFile: (file: FileEntry) => Promise<void>;
  closeFile: (path: string) => void;
  closeAllFiles: () => void;
  touchFile: (path: string) => void;
}

const useOpenedFileStore = create<OpenedFileState>()(
  immer((set) => ({
    files: [],

    /**
     * Open file, read the content, and push the file instance
     * into `files` property.
     *
     * @param file File entry instance.
     */
    openFile: async (file: FileEntry) => {
      const openedFile: OpenedFile = {
        name: file.name!,
        path: file.path,
        content: await readTextFile(file.path),
        touchedAt: Date.now(),
      };

      set((state) => {
        state.files.push(openedFile);
      });
    },

    /**
     * Remove file from the `files` property.
     *
     * @param path The file path.
     */
    closeFile: (path: string) => {
      set((state) => {
        const fileIndex = state.files.findIndex((file) => file.path === path);
        state.files.splice(fileIndex, 1);
      });
    },

    /**
     * Remove all files from the `files` property.
     */
    closeAllFiles: () => {
      set((state) => {
        state.files = [];
      });
    },

    /**
     * Update the `touchedAt` property of the file with path of
     * `path` using `Date.now()`.
     *
     * @param path The file path.
     */
    touchFile: (path: string) => {
      set((state) => {
        const fileIndex = state.files.findIndex((file) => file.path === path);
        state.files[fileIndex].touchedAt = Date.now();
      });
    },
  }))
);

export default useOpenedFileStore;
