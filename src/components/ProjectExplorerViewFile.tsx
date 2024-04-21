import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { createElement } from "react";
import { inferFileIcon } from "../libs/files";
import {
  openContextMenu,
  setContextMenuContent,
  setContextMenuPosition,
} from "../slices/context_menu";
import { useAppDispatch } from "../hooks/store";

interface Props {
  name: string
  nestingLevel: number
}

function ProjectExplorerViewFile({ name, nestingLevel }: Props) {
  const icon = inferFileIcon(name);

  const dispatch = useAppDispatch();

  function handleContextMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    dispatch(setContextMenuPosition([e.pageX, e.pageY]));
    dispatch(setContextMenuContent([
      {
        content: [
          {
            label: `Cut`,
          },
          {
            label: `Copy`,
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
          }
        ],
      },
    ]));

    dispatch(openContextMenu());
  }

  return (
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
  );
}

export default ProjectExplorerViewFile;
