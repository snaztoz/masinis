import Folder from "./Folder";
import Header from "./Header";
import { MdOutlineFileOpen } from "react-icons/md";
import { useAppSelector } from "../../hooks";

const title = "Project Explorer";

function View() {
  const fileTree = useAppSelector(s => s.fs.fileTree);

  return (
    <>
      <Header title={title} />

      <section className="mt-2 text-sm text-neutral-800">
        {fileTree?.map(f => {
          if (f.children) {
            return (
              <Folder
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

View.title = title;
View.icon = <MdOutlineFileOpen />

export default View;
