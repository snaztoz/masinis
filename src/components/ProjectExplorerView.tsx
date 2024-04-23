import { useAppSelector } from "../hooks/store";
import ProjectExplorerViewFolder from "./ProjectExplorerViewFolder";
import ProjectExplorerViewHeader from "./ProjectExplorerViewHeader";
import { MdOutlineFileOpen } from "react-icons/md";

const title = "Project Explorer";

function ProjectExplorerView() {
  const fileTree = useAppSelector(s => s.fs.fileTree);

  return (
    <>
      <ProjectExplorerViewHeader title={title} />

      <section className="mt-2 text-sm text-neutral-800">
        {fileTree?.map(f => {
          if (f.children) {
            return (
              <ProjectExplorerViewFolder
                key={f.name}
                name={f.name}
                content={f.children!}
                nestingLevel={0}
              />
            );
          }
        })}
      </section>
    </>
  );
}

ProjectExplorerView.title = title;
ProjectExplorerView.icon = <MdOutlineFileOpen />

export default ProjectExplorerView;
