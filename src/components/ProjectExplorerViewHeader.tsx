import ProjectExplorerViewHeaderMenu from "./menu/ProjectExplorerViewHeaderMenu";
import { MdMoreVert } from "react-icons/md";
import { useRef, useState } from "react";

interface Props {
  title: string
}

function ProjectExplorerViewHeader({ title }: Props) {
  const menuTogglerRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<[number, number]>([0, 0]);

  function handleMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();

    const togglerPosition = menuTogglerRef.current?.getBoundingClientRect();
    const x = togglerPosition!.right;
    const y = togglerPosition!.bottom;

    setMenuPosition([x, y]);
    setShowMenu(true);
  }

  return (
    <>
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

      <ProjectExplorerViewHeaderMenu
        position={menuPosition}
        isShown={showMenu}
        handleClose={() => setShowMenu(false)}
      />
    </>
  );
}

export default ProjectExplorerViewHeader;
