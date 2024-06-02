import { useAppDispatch, useAppSelector } from '../../../hooks';
import { unsetDirectoryPath } from '../../../slices/project';

export function useCloseDirectory(cleanup?: () => void) {
  const directoryPath = useAppSelector((s) => s.project.directoryPath);
  const dispatch = useAppDispatch();

  function handleCloseDirectory() {
    if (directoryPath) {
      dispatch(unsetDirectoryPath());
    }
    cleanup?.();
  }

  return { handleCloseDirectory };
}
