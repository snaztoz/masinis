import HStack from '../../../components/layouts/HStack';
import Menu from '../../../components/Menu';
import cn from 'classnames';
import { Icons } from '../../../libs/icons';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface Props {
  name: string;
  nestingLevel: number;
}

function File({ name, nestingLevel }: Props) {
  const [Icon, iconColorClass] = Icons.inferFileIcon(name);
  const buttonClassName = cn(
    `w-full py-0.5 flex dark:text-neutral-300 dark:focus:bg-neutral-800
    hover:bg-neutral-300 dark:hover:bg-neutral-800 border border-dashed
    border-transparent`
  );

  return (
    <>
      <Menu asContextMenu>
        <Menu.Trigger>
          <button className={buttonClassName}>
            <HStack
              className="grow items-center gap-1"
              // We are using manual CSS because Tailwind does not support
              // dynamic class that involves calculation like this
              style={{ marginLeft: `${0.75 + 0.75 * nestingLevel}rem` }}
            >
              <div className="invisible text-lg">
                <MdOutlineKeyboardArrowRight />
              </div>
              <div
                className={cn(
                  `w-5 text-sm flex justify-center`,
                  iconColorClass
                )}
              >
                <Icon />
              </div>
              <p>{name}</p>
            </HStack>
          </button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Group>
            <Menu.Item>Cut</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
            <Menu.Item>Rename {`"${name}"`} to ...</Menu.Item>
          </Menu.Group>

          <Menu.Group>
            <Menu.Item isDangerous>Delete {`"${name}"`}</Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu>
    </>
  );
}

export default File;
