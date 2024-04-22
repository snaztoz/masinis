import OverlayMenu from "./components/OverlayMenu";
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
        <section className="grow bg-neutral-50 dark:bg-neutral-800 rounded-lg">
          <h1>Hello, World!</h1>
        </section>

        <PrimarySideBar />
      </main>

      <OverlayMenu />
    </div>
  );
}

export default App;
