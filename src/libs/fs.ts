import { FileEntry, readDir } from "@tauri-apps/api/fs";
import { open as openDialog } from "@tauri-apps/api/dialog";

export namespace Fs {
  export async function showOpenDirectoryDialog(): Promise<string | null> {
    const selected = await openDialog({ directory: true });
    if (typeof selected !== "string") {
      return null;
    }
    return selected;
  }

  export async function readDirectoryContent(path: string): Promise<FileEntry[]> {
    const name = path.split(/[\/\\]/).pop();
    const children = await readDir(path, { recursive: true })
      .then(children => sortDirectoryContent(children));

    return [{ path, name, children }];
  }

  export function sortDirectoryContent(children: FileEntry[]): FileEntry[] {
    return children.sort((a, b) => {
      if (a.children && !b.children) {
        return -1;
      } else if (!a.children && b.children) {
        return 1;
      }
      return a.name!.localeCompare(b.name!);
    });
  }
}
