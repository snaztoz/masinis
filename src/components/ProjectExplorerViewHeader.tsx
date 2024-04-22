import { MdMoreVert } from "react-icons/md";

interface Props {
  title: string
}

function ProjectExplorerViewHeader({ title }: Props) {
  return (
    <header className="flex justify-between px-4">
      <h2
        className="text-sm text-neutral-500 dark:text-neutral-400 font-medium"
      >
        {title}
      </h2>

      <div className="relative flex items-center">
        <button
          className="text-neutral-400 hover:text-neutral-500
            dark:hover:text-neutral-300"
        >
          <MdMoreVert />
        </button>
      </div>
    </header>
  );
}

export default ProjectExplorerViewHeader;
