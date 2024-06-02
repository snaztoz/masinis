import OverlayMenu from '../../../components/OverlayMenu';
import OverlayMenuGroup from '../../../components/OverlayMenuGroup';
import OverlayMenuItem from '../../../components/OverlayMenuItem';
import { OverlayMenuPosition } from '../../../contracts/overlay_menu';
import { createPortal } from 'react-dom';
import { useCloseDirectory } from '../hooks/useCloseDirectory';
import { useOpenDirectoryDialog } from '../hooks/useOpenDirectoryDialog';

interface Props {
  isShown: boolean;
  position: OverlayMenuPosition;
  handleClose: () => void;
}

function HeaderMenu({ isShown, position, handleClose }: Props) {
  const containerEl = document.querySelector('#overlay-container')!;

  const { handleOpenDirectory } = useOpenDirectoryDialog(() => handleClose());
  const { handleCloseDirectory } = useCloseDirectory(() => handleClose());

  return (
    <>
      {isShown &&
        createPortal(
          <OverlayMenu boxPosition={position} handleClose={handleClose}>
            <OverlayMenuGroup>
              <OverlayMenuItem>New empty file</OverlayMenuItem>
            </OverlayMenuGroup>

            <OverlayMenuGroup>
              <OverlayMenuItem>Open file</OverlayMenuItem>
              <OverlayMenuItem handleClick={handleOpenDirectory}>
                Open directory
              </OverlayMenuItem>
            </OverlayMenuGroup>

            <OverlayMenuGroup>
              <OverlayMenuItem dangerous handleClick={handleCloseDirectory}>
                Close directory
              </OverlayMenuItem>
            </OverlayMenuGroup>
          </OverlayMenu>,
          containerEl
        )}
    </>
  );
}

export default HeaderMenu;
