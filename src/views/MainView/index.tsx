import HStack from '../../components/layouts/HStack';
import PrimarySideBar from './partials/PrimarySideBar';
import TabLayout from '../../components/layouts/TabLayout';

function MainView() {
  return (
    <HStack className="w-full h-full">
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
    </HStack>
  );
}

export default MainView;
