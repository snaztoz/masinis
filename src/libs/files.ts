import { GoFileCode, GoRuby } from "react-icons/go";
import { SiRuby, SiRubygems } from "react-icons/si";
import type { IconType } from "react-icons/lib";

/**
 * Special files that already have reserved icons.
 */
const specialFileIcons = new Map([
  ["Gemfile", SiRubygems],
  ["Gemfile.lock", SiRubygems],
  ["config.ru", GoRuby],
]);

/**
 * Icons based on file extension.
 */
const fileExtensionIcons = new Map([
  ["rb", SiRuby]
]);

/**
 * Infer icon that will be displayed in the file tree.
 *
 * @param name - File name (including extension, if exists)
 * @returns Icon element
 */
export function inferFileIcon(name: string): IconType {
  if (specialFileIcons.has(name)) {
    const icon = specialFileIcons.get(name)!;
    return icon;
  }

  // TODO: Change the algorithm for extension detection.
  const ext = name.split(".").pop()!;
  if (fileExtensionIcons.has(ext)) {
    const icon = fileExtensionIcons.get(ext)!;
    return icon;
  }

  // default icon
  return GoFileCode;
}
