import OverlayMenuBox from "./OverlayMenuBox";
import { ReactNode } from "react";

interface Props {
  boxPosition: [number, number]
  children: ReactNode
  handleClose: () => void
}

function OverlayMenu({ boxPosition, children, handleClose }: Props) {
  return (
    <div
      className="absolute left-0 top-0 right-0 bottom-0 z-10 w-full h-full
        select-none overflow-clip"
      onClick={handleClose}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
      }}
    >
      <OverlayMenuBox position={boxPosition}>
        {children}
      </OverlayMenuBox>
    </div>
  );
}

export default OverlayMenu;
