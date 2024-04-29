import TabView from "./TabView";

function MainView() {
  return (
    <section
      className="grow flex flex-col"
    >
      <TabView />
      <div className="grow bg-neutral-50 dark:bg-neutral-800">
        <h1>Hello, World!</h1>
      </div>
    </section>
  );
}

export default MainView;
