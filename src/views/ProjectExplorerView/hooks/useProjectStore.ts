import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ProjectState {
  directoryPath?: string;
  setDirectoryPath: (path: string) => void;
  unsetDirectoryPath: () => void;
}

const useProjectStore = create<ProjectState>()(
  immer((set) => ({
    setDirectoryPath: (path: string) => {
      set((state) => {
        state.directoryPath = path;
      });
    },

    unsetDirectoryPath: () => {
      set((state) => {
        state.directoryPath = undefined;
      });
    },
  }))
);

export default useProjectStore;
