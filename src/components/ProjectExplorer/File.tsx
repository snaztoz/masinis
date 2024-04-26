import FileContextMenu from "./FileContextMenu";
import useMenu from "../../hooks/useMenu";
import { Adapters } from "../../libs/adapters";
import { Icons } from "../../libs/icons";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { createElement, useState } from "react";

interface Props {
  name: string
  nestingLevel: number
}

function File({ name, nestingLevel }: Props) {
  const icon = Icons.inferFileIcon(name);
  const { cn } = Adapters;

  const [focused, setFocused] = useState(false);

  const {
    isMenuShown,
    menuPosition,
    setMenuPosition,
    openMenu,
    closeMenu,
  } = useMenu();

  function handleContextMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    setFocused(true);

    setMenuPosition({ x: e.pageX, y: e.pageY });
    openMenu();
  }

  return (
    <>
      <button
        className={cn("w-full", "py-0.5", "flex", "dark:text-neutral-300",
          "border", "border-dashed", "hover:bg-neutral-300", "dark:hover:bg-neutral-800",
          focused ? "border-pink-400" : "border-transparent",
        )}
        onContextMenu={handleContextMenu}
        onBlur={() => setFocused(false)}
      >
        <div
          className="grow flex items-center gap-1"
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
        position={menuPosition}
        isShown={isMenuShown}
        handleClose={closeMenu}
      />
    </>
  );
}

export default File;
