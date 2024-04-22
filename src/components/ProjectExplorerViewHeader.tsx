import { MdMoreVert } from "react-icons/md";
import {
  openOverlayMenu,
  setOverlayMenuContent,
  setOverlayMenuPosition,
} from "../slices/overlay_menu";
import { useAppDispatch } from "../hooks/store";
import { useRef } from "react";

interface Props {
  title: string
}

function ProjectExplorerViewHeader({ title }: Props) {
  const menuTogglerRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  function handleMenu() {
    const togglerPosition = menuTogglerRef.current?.getBoundingClientRect();
    const x = togglerPosition!.right;
    const y = togglerPosition!.bottom;

    dispatch(setOverlayMenuPosition([x, y]));
    dispatch(setOverlayMenuContent([
      {
        content: [
          {
            label: `Open directory`,
          },
        ]
      },
      {
        content: [
          {
            label: `Close directory`,
            isDanger: true,
          }
        ],
      },
    ]));

    dispatch(openOverlayMenu());
  }

  return (
    <header className="flex justify-between px-4">
      <h2
        className="text-sm text-neutral-500 dark:text-neutral-400 font-medium"
      >
        {title}
      </h2>

      <div
        ref={menuTogglerRef}
        className="relative flex items-center"
      >
        <button
          className="text-neutral-400 hover:text-neutral-500
            dark:hover:text-neutral-300"
          onClick={handleMenu}
        >
          <MdMoreVert />
        </button>
      </div>
    </header>
  );
}

export default ProjectExplorerViewHeader;
