import File from "./File";
import DirectoryContextMenu from "./DirectoryContextMenu";
import useMenu from "../../hooks/useMenu";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TbFolder, TbFolderOpen } from "react-icons/tb";
import { useDirectoryExpansion } from "./hooks/useDirectoryExpansion";

interface Props {
  name: string
  path: string
  nestingLevel: number
}

function Directory({ name, path, nestingLevel }: Props) {
  const {
    isExpanded,
    directoryChildren,
    toggleDirectory,
  } = useDirectoryExpansion(path);

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

    setMenuPosition({ x: e.pageX, y: e.pageY });
    openMenu();
  }

  const contentElements = directoryChildren.map(f => f.children ? (
    <Directory
      key={f.name!}
      name={f.name!}
      path={f.path!}
      nestingLevel={nestingLevel + 1}
    />
  ) : (
    <File
      key={f.name!}
      name={f.name!}
      nestingLevel={nestingLevel + 1}
    />
  ));

  return (
    <>
      <div className="w-full">
        <button
          className="w-full py-0.5 dark:text-neutral-300 hover:bg-neutral-300
            dark:hover:bg-neutral-800"
          onClick={toggleDirectory}
          onContextMenu={handleContextMenu}
        >
          <div
            className="grow flex gap-1"
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

      <DirectoryContextMenu
        fileName={name}
        position={menuPosition}
        isShown={isMenuShown}
        handleClose={closeMenu}
      />
    </>
  );
}

export default Directory;
