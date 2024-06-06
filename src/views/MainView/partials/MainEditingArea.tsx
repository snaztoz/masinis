import TabLayout from '../../../components/layouts/TabLayout';

function MainEditingArea() {
  return (
    <TabLayout
      tabs={[
        {
          id: 'first',
          title: 'The first tab',
          view: <p>This is the first tab!</p>,
          isActive: true,
        },
        {
          id: 'second',
          title: 'The second tab',
          view: <p>This is the second tab!</p>,
          isActive: false,
        },
        {
          id: 'third',
          title: 'The third tab',
          view: <p>This is the third tab!</p>,
          isActive: false,
        },
      ]}
    />
  );
}

export default MainEditingArea;
