import HStack from '../../components/layouts/HStack';
import MainEditingArea from './partials/MainEditingArea';
import PrimarySideBar from './partials/PrimarySideBar';

function MainView() {
  return (
    <HStack className="w-full h-full">
      <MainEditingArea />
      <PrimarySideBar />
    </HStack>
  );
}

export default MainView;
