import File from './File';
import HStack from '../../../components/layouts/HStack';
import Menu from '../../../components/Menu';
import cn from 'classnames';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { TbFolder, TbFolderOpen } from 'react-icons/tb';
import { useDirectoryExpansion } from '../hooks';

interface Props {
  name: string;
  path: string;
  nestingLevel: number;
}

function Directory({ name, path, nestingLevel }: Props) {
  const { isExpanded, directoryChildren, toggleDirectory } =
    useDirectoryExpansion(path);

  return (
    <>
      <div className="w-full">
        <Menu asContextMenu>
          <Menu.Trigger>
            <button
              className={cn(
                `w-full py-0.5 dark:text-neutral-300 border border-dashed
                border-transparent hover:bg-neutral-300 dark:hover:bg-neutral-800
                dark:focus:bg-neutral-800`
              )}
              onClick={toggleDirectory}
            >
              <HStack
                className="grow items-end gap-1"
                // We are using manual CSS because Tailwind does not support
                // dynamic classes that involves calculation like this
                style={{ marginLeft: `${0.75 + 0.75 * nestingLevel}rem` }}
              >
                <div
                  className="flex items-end text-lg text-neutral-500
                    dark:text-neutral-600"
                >
                  {isExpanded ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdOutlineKeyboardArrowRight />
                  )}
                </div>
                <div className="w-5 flex justify-center items-end text-lg">
                  {isExpanded ? (
                    <TbFolderOpen className="text-pink-400" />
                  ) : (
                    <TbFolder className="text-pink-400" />
                  )}
                </div>
                <p>{name}</p>
              </HStack>
            </button>
          </Menu.Trigger>

          <Menu.Content>
            <Menu.Group>
              <Menu.Item>New file</Menu.Item>
              <Menu.Item>New directory</Menu.Item>
            </Menu.Group>

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

        {isExpanded &&
          directoryChildren.map((f) =>
            f.children ? (
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
            )
          )}
      </div>
    </>
  );
}

export default Directory;
