import HStack from '../HStack';
import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { MdClose } from 'react-icons/md';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  title: string;
  isActive: boolean;
}

function Tab({ id, title, isActive, ...props }: Props) {
  const containerClassName = cn(
    `border-b-2 select-none`,
    isActive ? 'border-pink-500' : 'border-transparent'
  );

  const buttonClassName = cn(
    `group py-1.5 px-3 text-sm border-r border-neutral-500
    dark:border-neutral-700`,
    isActive
      ? `text-neutral-600 dark:text-neutral-200`
      : `text-neutral-500 hover:text-neutral-600 dark:text-neutral-400
        dark:hover:text-neutral-200`
  );

  const closeButtonClassName = cn(
    `rounded-full text-neutral-400 dark:hover:text-neutral-200
    dark:hover:bg-neutral-700`,
    { 'invisible group-hover:visible': !isActive }
  );

  return (
    <div className={containerClassName}>
      <button {...props} className={buttonClassName}>
        <HStack className="items-center gap-2">
          {title}
          <span className={closeButtonClassName}>
            <MdClose />
          </span>
        </HStack>
      </button>
    </div>
  );
}

export default Tab;
