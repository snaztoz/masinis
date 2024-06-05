import useProjectStore from './useProjectStore';
import { Fs } from '../../../libs/fs';

function useOpenDirectoryDialog(cleanup?: () => void) {
  const setDirectoryPath = useProjectStore((state) => state.setDirectoryPath);

  const handleOpenDirectory = async () => {
    const path = await Fs.showOpenDirectoryDialog();
    if (path) {
      setDirectoryPath(path);
    }
    cleanup?.();
  };

  return { handleOpenDirectory };
}

export default useOpenDirectoryDialog;
