import useProjectStore from './useProjectStore';

function useCloseDirectory(cleanup?: () => void) {
  const unsetDirectoryPath = useProjectStore(
    (state) => state.unsetDirectoryPath
  );

  function handleCloseDirectory() {
    unsetDirectoryPath();
    cleanup?.();
  }

  return { handleCloseDirectory };
}

export default useCloseDirectory;
