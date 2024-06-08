import { EditorState } from '@codemirror/state';
import {
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from '@codemirror/view';
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands';
import { useCallback, useEffect, useState } from 'react';

function useCodeMirror(initialDoc: string) {
  const [element, setElement] = useState<HTMLElement>();

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const state = EditorState.create({
      doc: initialDoc,
      extensions: [
        history(),
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        keymap.of([indentWithTab]),
        keymap.of(historyKeymap),
        keymap.of(defaultKeymap),
      ],
    });

    const view = new EditorView({ state, parent: element });

    return () => view.destroy();
  }, [element]);

  return { ref };
}

export default useCodeMirror;
