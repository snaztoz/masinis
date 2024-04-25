import OverlayMenu from "../OverlayMenu";
import OverlayMenuGroup from "../OverlayMenuGroup";
import OverlayMenuItem from "../OverlayMenuItem";
import { Fs } from "../../libs/fs";
import { OverlayMenuPosition } from "../../contracts/overlay_menu";
import { createPortal } from "react-dom";
import { setDirectoryPath } from "../../slices/project";
import { useAppDispatch } from "../../hooks";

interface Props {
  isShown: boolean
  position: OverlayMenuPosition
  handleClose: () => void
}

function HeaderMenu({ isShown, position, handleClose }: Props) {
  const containerEl = document.querySelector("#overlay-container")!;

  const dispatch = useAppDispatch();

  async function handleOpenDirectory() {
    const path = await Fs.showOpenDirectoryDialog();
    if (path) {
      dispatch(setDirectoryPath(path));
    }
    handleClose();
  }

  return (
    <>
      {isShown && createPortal((
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
            <OverlayMenuItem dangerous>Close directory</OverlayMenuItem>
          </OverlayMenuGroup>
        </OverlayMenu>
      ), containerEl)}
    </>
  );
}

export default HeaderMenu;
