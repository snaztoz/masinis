import FileEntry from "../contracts/fs";
import ProjectExplorerViewFile from "./ProjectExplorerViewFile";
import ProjectExplorerViewFolderContextMenu from "./menu/ProjectExplorerViewFolderContextMenu";
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
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<[number, number]>([0, 0]);

  function handleContextMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();

    setContextMenuPosition([e.pageX, e.pageY]);
    setShowContextMenu(true);
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
    <ProjectExplorerViewFile
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

      <ProjectExplorerViewFolderContextMenu
        fileName={name}
        position={contextMenuPosition}
        isShown={showContextMenu}
        handleClose={() => setShowContextMenu(false)}
      />
    </>
  );
}

export default ProjectExplorerViewFolder;
