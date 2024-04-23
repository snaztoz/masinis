import FileEntry from "../contracts/fs";
import ProjectExplorerViewFile from "./ProjectExplorerViewFile";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TbFolder, TbFolderOpen } from "react-icons/tb";
import {
  openOverlayMenu,
  setOverlayMenuContent,
  setOverlayMenuPosition,
} from "../slices/overlay_menu";
import { useState } from "react";
import { useAppDispatch } from "../hooks/store";

interface Props {
  name: string
  content: FileEntry[]
  nestingLevel: number
}

function ProjectExplorerViewFolder({ name, content, nestingLevel }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useAppDispatch();

  function handleOverlayMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    dispatch(setOverlayMenuPosition([e.pageX, e.pageY]));
    dispatch(setOverlayMenuContent([
      {
        content: [
          {
            label: "New file"
          },
          {
            label: "New folder"
          },
        ],
      },
      {
        content: [
          {
            label: "Cut",
          },
          {
            label: "Copy",
          },
          {
            label: `Rename "${name}" to ...`,
          },
        ]
      },
      {
        content: [
          {
            label: `Delete "${name}"`,
            isDanger: true,
          },
        ],
      },
    ]));

    dispatch(openOverlayMenu());
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
    <div className="w-full">
      <button
        className="w-full py-0.5 dark:text-neutral-300 hover:bg-neutral-300
          dark:hover:bg-neutral-800"
        onClick={toggle}
        onContextMenu={handleOverlayMenu}
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
  );
}

export default ProjectExplorerViewFolder;
