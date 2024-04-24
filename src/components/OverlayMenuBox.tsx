import { OverlayMenuPosition } from "../contracts/overlay_menu";
import { ReactNode } from "react";

interface BoxPosition {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

interface Props {
  position: OverlayMenuPosition
  children: ReactNode
}

function OverlayMenuBox({ position, children }: Props) {
  const { x, y } = position;

  function getPositionStyles(): BoxPosition {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    const xPosExceedingHalfOfWindow = x > windowWidth / 2;
    const yPosExceedingHalfOfWindow = y > windowHeight / 2;

    return {
      top: yPosExceedingHalfOfWindow ? undefined : `${y}px`,
      bottom: yPosExceedingHalfOfWindow ? `${windowHeight - y}px` : undefined,

      left: xPosExceedingHalfOfWindow ? undefined : `${x}px`,
      right: xPosExceedingHalfOfWindow ? `${windowWidth - x}px` : undefined,
    };
  }

  return (
    <nav
      className="absolute bg-blue-200 min-w-80 bg-neutral-100
        dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700
        text-sm rounded"
      style={getPositionStyles()}
      onClick={(e) => {
        e.stopPropagation()
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="flex flex-col">
        {children}
      </div>
    </nav>
  );
}

export default OverlayMenuBox;
