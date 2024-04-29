import MainView from "./components/MainView";
import PrimarySideBar from "./components/PrimarySideBar";

function App() {
  return (
    <div
      className="w-screen h-screen bg-neutral-200 dark:bg-neutral-900
        text-neutral-800 dark:text-white"
      // disable system's default context menu
      onContextMenu={(e) => e.preventDefault()}
    >
      <main className="w-full h-full flex">
        <MainView />
        <PrimarySideBar />
      </main>

      <div id="overlay-container"></div>
    </div>
  );
}

export default App;
