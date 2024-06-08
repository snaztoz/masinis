import CodeEditorView from './CodeEditorView';
import TabItem from '../../../components/layouts/TabLayout/TabItem';
import TabLayout from '../../../components/layouts/TabLayout';
import useOpenedFileStore from '../../hooks/useOpenedFileStore';

function MainEditingArea() {
  const openedFiles = useOpenedFileStore((state) => state.files);
  const closeFile = useOpenedFileStore((state) => state.closeFile);
  const touchFile = useOpenedFileStore((state) => state.touchFile);

  const noOpenedFile = openedFiles.length === 0;
  const mostRecentTouchedTab = noOpenedFile
    ? undefined
    : openedFiles.reduce((mostRecentTab, tab) => {
        return tab.touchedAt > mostRecentTab.touchedAt ? tab : mostRecentTab;
      });

  const tabs: TabItem[] = openedFiles.map((file) => ({
    id: file.path,
    title: file.name,
    // if it's undefined, then the openedFiles must be empty anyway!
    isActive: mostRecentTouchedTab!.path === file.path,
    view: () => <CodeEditorView initialDoc={file.content!} />,
  }));

  function handleTabCloseClick(path: string) {
    const targetTabIndex = tabs.findIndex((tab) => tab.id === path);

    const isTabActive = tabs[targetTabIndex]!.isActive;
    const lastRemainingTab = tabs.length === 1;

    if (!isTabActive || lastRemainingTab) {
      // remove the targeted tab, no automatic tab changing
      closeFile(path);
      return;
    }

    // change active tab to another opened tab

    const removedTabIsTheLastTab = targetTabIndex + 1 === tabs.length;
    if (removedTabIsTheLastTab) {
      // no tab after the removed one, so we mark the tab before
      // `targetTabIndex` as the new active tab
      touchFile(tabs[targetTabIndex - 1].id);
    } else {
      // mark the next tab as the new active tab
      touchFile(tabs[targetTabIndex + 1].id);
    }

    closeFile(path);
  }

  return (
    <TabLayout
      tabs={tabs}
      //
      // `id` is file path in this context
      //
      onTabClick={touchFile}
      onTabCloseClick={handleTabCloseClick}
    />
  );
}

export default MainEditingArea;
