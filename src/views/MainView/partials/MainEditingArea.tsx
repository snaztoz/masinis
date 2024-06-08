import CodeEditorView from './CodeEditorView';
import TabLayout from '../../../components/layouts/TabLayout';

function MainEditingArea() {
  return (
    <TabLayout
      tabs={[
        {
          id: 'first',
          title: 'The first tab',
          view: () => (
            <CodeEditorView initialDoc="Initial code for the first tab" />
          ),
          isActive: true,
        },
        {
          id: 'second',
          title: 'The second tab',
          view: () => (
            <CodeEditorView initialDoc="Initial code for the second tab" />
          ),
          isActive: false,
        },
        {
          id: 'third',
          title: 'The third tab',
          view: () => (
            <CodeEditorView initialDoc="Initial code for the third tab" />
          ),
          isActive: false,
        },
      ]}
    />
  );
}

export default MainEditingArea;
