import File from "./File";
import FileEntry from "../../contracts/fs";
import FolderContextMenu from "./FolderContextMenu";
import useMenu from "../../hooks/useMenu";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TbFolder, TbFolderOpen } from "react-icons/tb";
import { useState } from "react";

interface Props {
  name: string
  content: FileEntry[]
  nestingLevel: number
}

function ProjectExplorerViewFolder({ name, content, nestingLevel }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
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

    setMenuPosition([e.pageX, e.pageY]);
    openMenu();
  }

  function toggle() {
    setIsExpanded(!isExpanded);
  }

  const contentElements = content.map(f => f.children ? (
    <ProjectExplorerViewFolder
      key={f.name}
      name={f.name}
      content={f.children!}
      nestingLevel={nestingLevel + 1}
    />
  ) : (
    <File
      key={f.name}
      name={f.name}
      nestingLevel={nestingLevel + 1}
    />
  ));

  return (
    <>
      <div className="w-full">
        <button
          className="w-full py-0.5 dark:text-neutral-300 hover:bg-neutral-300
            dark:hover:bg-neutral-800"
          onClick={toggle}
          onContextMenu={handleContextMenu}
        >
          <div
            className="flex gap-1"
            // We are using manual CSS because Tailwind does not support
            // dynamic class that involves calculation like this
            style={{marginLeft: `${0.75 + 0.75 * nestingLevel}rem`}}
          >
            <div
              className="flex items-end text-lg text-neutral-500 dark:text-neutral-600"
            >
              {isExpanded
                ? <MdOutlineKeyboardArrowDown />
                : <MdOutlineKeyboardArrowRight />
              }
            </div>
            <div className="w-5 flex justify-center items-end text-lg">
              {isExpanded
                ? <TbFolderOpen className="text-pink-400" />
                : <TbFolder className="text-pink-400" />
              }
            </div>
            <p>{name}</p>
          </div>
        </button>

        {isExpanded && contentElements}
      </div>

      <FolderContextMenu
        fileName={name}
        position={menuPosition}
        isShown={isMenuShown}
        handleClose={closeMenu}
      />
    </>
  );
}

export default ProjectExplorerViewFolder;
