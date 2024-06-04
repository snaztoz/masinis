import HStack from '../../../components/layouts/HStack';
import Menu from '../../../components/Menu';
import { MdMoreVert } from 'react-icons/md';
import { useOpenDirectoryDialog } from '../hooks/useOpenDirectoryDialog';
import { useCloseDirectory } from '../hooks/useCloseDirectory';

interface Props {
  title: string;
}

function Header({ title }: Props) {
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
        {/* <div ref={menuTogglerRef} className="relative flex items-center">
          <button
            className="text-neutral-400 hover:text-neutral-500
              dark:hover:text-neutral-300"
            onClick={handleMenu}
          >
            <MdMoreVert />
          </button>
        </div> */}
      </HStack>

      {/* <HeaderMenu
        position={menuPosition}
        isShown={isMenuShown}
        handleClose={closeMenu}
      /> */}
    </>
  );
}

export default Header;
