import { FileEntry } from '@tauri-apps/api/fs';
import { Fs } from '../../../libs/fs';
import { useEffect, useState } from 'react';

function useDirectoryExpansion(path: string) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [directoryChildren, setDirectoryChildren] = useState<FileEntry[]>([]);

  useEffect(() => {
    if (isExpanded) {
      Fs.readDirectoryChildren(path).then((c) => {
        setDirectoryChildren(c);
      });
    }
  }, [isExpanded]);

  function toggleDirectory() {
    setIsExpanded(!isExpanded);
  }

  return {
    isExpanded,
    directoryChildren,
    toggleDirectory,
  };
}

export default useDirectoryExpansion;
