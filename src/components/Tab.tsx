import { Adapters } from "../libs/adapters";
import { Icons } from "../libs/icons";

interface Props {
  title: string
  isActive?: boolean
  handleClick: () => void
}

function Tab({ title, isActive, handleClick }: Props) {
  const { cn } = Adapters;
  const Icon = Icons.inferFileIcon(title);

  return (
    <button
      className={cn("max-w-40", "px-2", "py-2", "flex", "items-center", "gap-1",
        "border-r", "border-neutral-300", "dark:border-neutral-800", "text-nowrap",
        isActive
          ? ["bg-neutral-50", "dark:bg-neutral-800", "dark:text-neutral-200"]
          : "dark:hover:text-neutral-200",
      )}
      onClick={handleClick}
    >
      <div className="w-5 flex justify-center">
        <Icon />
      </div>
      <span className="text-left overflow-x-hidden text-ellipsis">
        {title}
      </span>
      <div className="w-5 flex justify-center">
        {/* icon placeholder */}
      </div>
    </button>
  );
}

export default Tab;
