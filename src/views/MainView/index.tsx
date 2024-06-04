import TabLayout from '../../components/layouts/TabLayout';
import PrimarySideBar from './partials/PrimarySideBar';

function MainView() {
  return (
    <main className="w-full h-full flex">
      <TabLayout
        tabs={[
          {
            id: 'first',
            title: 'The first tab',
            view: <p>This is the first tab!</p>,
          },
          {
            id: 'second',
            title: 'The second tab',
            view: <p>This is the second tab!</p>,
          },
        ]}
      />

      <PrimarySideBar />
    </main>
  );
}

export default MainView;
