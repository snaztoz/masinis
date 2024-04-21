import ContextMenuItem from "./ContextMenuItem";
import ContextMenuItemGroup from "./ContextMenuItemGroup";
import { useAppSelector } from "../hooks/store";

interface BoxPosition {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

function ContextMenuBox() {
  const [xPos, yPos] = useAppSelector(s => s.contextMenu.position);
  const groups = useAppSelector(s => s.contextMenu.groups);

  const itemsEl = groups.map((group, i) => (
    <ContextMenuItemGroup key={i}>
      {group.content.map((item, i) => (
        <ContextMenuItem
          key={i}
          isDanger={item.isDanger}
        >
          {item.label}
        </ContextMenuItem>
      ))}
    </ContextMenuItemGroup>
  ));

  function getPositionStyles(): BoxPosition {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    const xPosExceedingHalfOfWindow = xPos > windowWidth / 2;
    const yPosExceedingHalfOfWindow = yPos > windowHeight / 2;

    return {
      top: yPosExceedingHalfOfWindow ? undefined : `${yPos}px`,
      bottom: yPosExceedingHalfOfWindow ? `${windowHeight - yPos}px` : undefined,

      left: xPosExceedingHalfOfWindow ? undefined : `${xPos}px`,
      right: xPosExceedingHalfOfWindow ? `${windowWidth - xPos}px` : undefined,
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
        {itemsEl}
      </div>
    </nav>
  );
}

export default ContextMenuBox;
