import { Fs } from '../../../libs/fs';
import { setDirectoryPath } from '../../../slices/project';
import { useAppDispatch } from '../../../hooks';

export function useOpenDirectoryDialog(cleanup?: () => void) {
  const dispatch = useAppDispatch();

  const handleOpenDirectory = async () => {
    const path = await Fs.showOpenDirectoryDialog();
    if (path) {
      dispatch(setDirectoryPath(path));
    }
    cleanup?.();
  };

  return { handleOpenDirectory };
}
