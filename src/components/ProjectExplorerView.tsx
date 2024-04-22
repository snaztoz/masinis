import ProjectExplorerViewFolder from "./ProjectExplorerViewFolder";
import ProjectExplorerViewHeader from "./ProjectExplorerViewHeader";
import { TEMP_FILE_TREE } from "./temp_file_tree";
import { MdOutlineFileOpen } from "react-icons/md";

const title = "Project Explorer";

function ProjectExplorerView() {
  return (
    <>
      <ProjectExplorerViewHeader title={title} />

      <section className="mt-2 text-sm text-neutral-800">
        {TEMP_FILE_TREE.map(f => {
          if (f.isDirectory) {
            return (
              <ProjectExplorerViewFolder
                key={f.name}
                name={f.name}
                content={f.dirContent!}
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
