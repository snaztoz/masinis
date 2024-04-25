import Folder from "./Folder";
import Header from "./Header";
import { MdOutlineFileOpen } from "react-icons/md";
import { useAppSelector } from "../../hooks";

const title = "Project Explorer";

function View() {
  const directoryPath = useAppSelector(s => s.project.directoryPath);
  const directoryName = directoryPath?.split(/[\/\\]/).pop();

  return (
    <>
      <Header title={title} />

      <section
        className="grow overflow-auto mt-2 text-sm text-neutral-800"
      >
        {directoryPath && (
          <Folder
            name={directoryName!}
            path={directoryPath}
            nestingLevel={0}
          />
        )}
      </section>
    </>
  );
}

View.title = title;
View.icon = <MdOutlineFileOpen />

export default View;
