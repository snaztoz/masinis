import VStack from '../../../components/layouts/VStack';
import { LuFolderTree } from 'react-icons/lu';
import { useOpenDirectoryDialog } from '../hooks/useOpenDirectoryDialog';

function NoSelectedProject() {
  const { handleOpenDirectory } = useOpenDirectoryDialog();

  return (
    <VStack
      className="h-full px-4 gap-5 justify-center items-center
        dark:text-neutral-400"
    >
      <div className="text-7xl">
        <LuFolderTree />
      </div>

      <div className="text-center px-2">
        <h3 className="text-lg font-medium">No opened directory</h3>

        <p className="mt-1 dark:text-neutral-500">
          Your working directory contents will be shown here
        </p>
      </div>

      <div>
        <button
          className="px-3 py-2 rounded-lg bg-pink-600 hover:bg-pink-700
            text-pink-200"
          onClick={handleOpenDirectory}
        >
          Open a directory
        </button>
      </div>
    </VStack>
  );
}

export default NoSelectedProject;
