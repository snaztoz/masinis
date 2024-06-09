import HStack from '../HStack';
import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';
import { MdClose } from 'react-icons/md';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  title: string;
  isActive: boolean;
  icon?: {
    el: IconType;
    className: string;
  };
  closeHandler: () => void;
}

function Tab({ id, title, isActive, icon, closeHandler, ...props }: Props) {
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

  let Icon: IconType | undefined;
  let iconClassName: string | undefined;
  if (icon) {
    Icon = icon.el;
    iconClassName = icon.className;
  }

  return (
    <div className={containerClassName}>
      <button {...props} className={buttonClassName}>
        <HStack className="items-center gap-1.5">
          {Icon && (
            <div
              className={cn(`w-5 text-sm flex justify-center`, iconClassName)}
            >
              <Icon />
            </div>
          )}
          <p className="whitespace-nowrap">{title}</p>
          <span
            className={closeButtonClassName}
            onClick={(e) => {
              e.stopPropagation();
              closeHandler();
            }}
          >
            <MdClose />
          </span>
        </HStack>
      </button>
    </div>
  );
}

export default Tab;
