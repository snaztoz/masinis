import HStack from '../../../components/layouts/HStack';
import Menu from '../../../components/Menu';
import { MdMoreVert } from 'react-icons/md';
import {
  useCloseDirectory,
  useOpenDirectoryDialog,
  useProjectStore,
} from '../hooks';

interface Props {
  title: string;
}

function Header({ title }: Props) {
  const directoryPath = useProjectStore((state) => state.directoryPath);

  const { handleOpenDirectory } = useOpenDirectoryDialog();
  const { handleCloseDirectory } = useCloseDirectory();

  return (
    <>
      <HStack className="w-full justify-between px-4">
        <h2 className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
          {title}
        </h2>

        <Menu>
          <Menu.Trigger>
            <button
              className="text-neutral-500 dark:text-neutral-400
                hover:text-neutral-400 dark:hover:text-neutral-300"
            >
              <MdMoreVert />
            </button>
          </Menu.Trigger>

          <Menu.Content>
            <Menu.Group>
              <Menu.Item>New empty file</Menu.Item>
            </Menu.Group>

            <Menu.Group>
              <Menu.Item>Open file</Menu.Item>
              <Menu.Item
                onClickWithCloser={(_, close) => {
                  handleOpenDirectory().then(close);
                }}
              >
                Open directory
              </Menu.Item>
            </Menu.Group>

            <Menu.Group>
              <Menu.Item
                isDangerous
                disabled={!directoryPath}
                onClickWithCloser={(_, close) => {
                  handleCloseDirectory();
                  close();
                }}
              >
                Close directory
              </Menu.Item>
            </Menu.Group>
          </Menu.Content>
        </Menu>
      </HStack>
    </>
  );
}

export default Header;
