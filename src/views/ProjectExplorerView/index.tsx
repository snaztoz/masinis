import Directory from './partials/Directory';
import Header from './partials/Header';
import NoSelectedProject from './partials/NoSelectedProject';
import { MdOutlineFileOpen } from 'react-icons/md';
import { useAppSelector } from '../../hooks';

const title = 'Project Explorer';

function ProjectExplorer() {
  const directoryPath = useAppSelector((s) => s.project.directoryPath);
  const directoryName = directoryPath?.split(/[\/\\]/).pop();

  return (
    <>
      <Header title={title} />

      <section className="grow overflow-auto mt-2 text-sm text-neutral-800">
        {directoryPath ? (
          <Directory
            key={directoryPath}
            name={directoryName!}
            path={directoryPath}
            nestingLevel={0}
          />
        ) : (
          <NoSelectedProject />
        )}
      </section>
    </>
  );
}

ProjectExplorer.title = title;
ProjectExplorer.Icon = MdOutlineFileOpen;

export default ProjectExplorer;
