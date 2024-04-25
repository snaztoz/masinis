import { FileEntry, readDir } from "@tauri-apps/api/fs";
import { open as openDialog } from "@tauri-apps/api/dialog";

export namespace Fs {
  export async function showOpenDirectoryDialog(): Promise<string | null> {
    const selected = await openDialog({ directory: true, recursive: true });
    if (typeof selected !== "string") {
      return null;
    }
    return selected;
  }

  export async function readDirectoryChildren(path: string): Promise<FileEntry[]> {
    return await readDir(path, { recursive: false })
      .then(children => sortDirectoryChildren(children));
  }

  export function sortDirectoryChildren(children: FileEntry[]): FileEntry[] {
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
