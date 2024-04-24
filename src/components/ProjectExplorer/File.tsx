import FileContextMenu from "./FileContextMenu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { createElement, useState } from "react";
import { inferFileIcon } from "../../libs/files";

interface Props {
  name: string
  nestingLevel: number
}

function File({ name, nestingLevel }: Props) {
  const icon = inferFileIcon(name);

  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<[number, number]>([0, 0]);

  function handleContextMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();

    setContextMenuPosition([e.pageX, e.pageY]);
    setShowContextMenu(true);
  }

  return (
    <>
      <button
        className="w-full py-0.5 dark:text-neutral-300 hover:bg-neutral-300
          dark:hover:bg-neutral-800"
        onContextMenu={handleContextMenu}
      >
        <div
          className="w-full flex items-center gap-1"
          // We are using manual CSS because Tailwind does not support
          // dynamic class that involves calculation like this
          style={{marginLeft: `${0.75 + 0.75 * nestingLevel}rem`}}
        >
          <div className="invisible text-lg">
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="w-5 text-sm flex justify-center">
            {createElement(icon)}
          </div>
          <p>{name}</p>
        </div>
      </button>

      <FileContextMenu
        fileName={name}
        position={contextMenuPosition}
        isShown={showContextMenu}
        handleClose={() => setShowContextMenu(false)}
      />
    </>
  );
}

export default File;
