import FileContextMenu from './FileContextMenu';
import useMenu from '../../../hooks/useMenu';
import { Adapters } from '../../../libs/adapters';
import { Icons } from '../../../libs/icons';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface Props {
  name: string;
  nestingLevel: number;
}

function File({ name, nestingLevel }: Props) {
  const [Icon, iconColorClass] = Icons.inferFileIcon(name);
  const { cn } = Adapters;

  const { isMenuShown, menuPosition, setMenuPosition, openMenu, closeMenu } =
    useMenu();

  function handleContextMenu(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    e.stopPropagation();

    setMenuPosition({ x: e.pageX, y: e.pageY });
    openMenu();
  }

  return (
    <>
      <button
        className={cn(
          'w-full',
          'py-0.5',
          'flex',
          'dark:text-neutral-300',
          'dark:focus:bg-neutral-800',
          'hover:bg-neutral-300',
          'dark:hover:bg-neutral-800',
          'border',
          'border-dashed',
          isMenuShown ? 'border-pink-400' : 'border-transparent'
        )}
        onContextMenu={handleContextMenu}
      >
        <div
          className="grow flex items-center gap-1"
          // We are using manual CSS because Tailwind does not support
          // dynamic class that involves calculation like this
          style={{ marginLeft: `${0.75 + 0.75 * nestingLevel}rem` }}
        >
          <div className="invisible text-lg">
            <MdOutlineKeyboardArrowRight />
          </div>
          <div
            className={cn(
              'w-5',
              'text-sm',
              'flex',
              'justify-center',
              iconColorClass
            )}
          >
            <Icon />
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
