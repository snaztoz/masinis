import MainView from './views/MainView';

function App() {
  return (
    <div
      className="w-screen h-screen bg-neutral-200 dark:bg-neutral-900
        text-neutral-800 dark:text-white"
      // disable system's default context menu
      onContextMenu={(e) => e.preventDefault()}
    >
      <MainView />
    </div>
  );
}

export default App;
