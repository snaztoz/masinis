import OverlayMenu from "../OverlayMenu";
import OverlayMenuGroup from "../OverlayMenuGroup";
import OverlayMenuItem from "../OverlayMenuItem";
import { createPortal } from "react-dom";

interface Props {
  fileName: string
  isShown: boolean
  position: [number, number]
  handleClose: () => void
}

function ProjectExplorerViewFolderContextMenu({
  fileName,
  isShown,
  position,
  handleClose,
}: Props) {
  const containerEl = document.querySelector("#overlay-container")!;

  return (
    <>
      {isShown && createPortal((
        <OverlayMenu boxPosition={position} handleClose={handleClose}>
          <OverlayMenuGroup>
            <OverlayMenuItem>New file</OverlayMenuItem>
            <OverlayMenuItem>New folder</OverlayMenuItem>
          </OverlayMenuGroup>

          <OverlayMenuGroup>
            <OverlayMenuItem>Cut</OverlayMenuItem>
            <OverlayMenuItem>Copy</OverlayMenuItem>
            <OverlayMenuItem>Rename {`"${fileName}"`} to ...</OverlayMenuItem>
          </OverlayMenuGroup>

          <OverlayMenuGroup>
            <OverlayMenuItem dangerous>Delete {`"${fileName}"`}</OverlayMenuItem>
          </OverlayMenuGroup>
        </OverlayMenu>
      ), containerEl)}
    </>
  );
}

export default ProjectExplorerViewFolderContextMenu;
