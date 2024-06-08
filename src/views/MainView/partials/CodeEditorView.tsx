import useCodeMirror from '../hooks/useCodeMirror';

interface Props {
  initialDoc: string;
}

function CodeEditorView({ initialDoc }: Props) {
  const { ref } = useCodeMirror(initialDoc);

  return <div ref={ref} className="w-full h-full"></div>;
}

export default CodeEditorView;
