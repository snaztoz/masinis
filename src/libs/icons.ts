import { BsEyeglasses, BsFiletypeJson, BsFiletypeSvg } from 'react-icons/bs';
import { GoFileCode, GoRuby } from 'react-icons/go';
import {
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiRuby,
  SiRubygems,
  SiTypescript,
} from 'react-icons/si';
import type { IconType } from 'react-icons/lib';

export namespace Icons {
  /**
   * Special files that already have reserved icons.
   */
  const specialFileIcons = new Map<string, [IconType, string]>([
    ['.gitignore', [SiGit, 'text-orange-500']],
    ['Gemfile', [SiRubygems, '']],
    ['Gemfile.lock', [SiRubygems, '']],
    ['README.md', [BsEyeglasses, 'text-blue-500']],
    ['config.ru', [GoRuby, '']],
    ['package.json', [SiNodedotjs, 'text-green-500']],
    ['package-lock.json', [SiNodedotjs, 'text-green-500']],
    ['tsconfig.json', [BsFiletypeJson, 'text-blue-500']],
    ['yarn.lock', [SiNodedotjs, 'text-green-500']],
  ]);

  /**
   * Icons based on file extension.
   */
  const fileExtensionIcons = new Map<string, [IconType, string]>([
    ['html', [SiHtml5, 'text-orange-500']],
    ['json', [BsFiletypeJson, 'text-yellow-300']],
    ['js', [SiJavascript, 'text-yellow-500']],
    ['jsx', [SiReact, 'text-blue-500']],
    ['rb', [SiRuby, 'text-red-500']],
    ['svg', [BsFiletypeSvg, '']],
    ['ts', [SiTypescript, 'text-blue-500']],
    ['tsx', [SiReact, 'text-blue-500']],
  ]);

  /**
   * Default icon for arbitrary files.
   */
  const defaultIcon: [IconType, string] = [GoFileCode, ''];

  /**
   * Infer icon that will be displayed in the file tree.
   *
   * @param name - File name (including extension, if exists)
   * @returns A tuple containing icon element and its color scheme class
   */
  export function inferFileIcon(name: string): [IconType, string] {
    if (specialFileIcons.has(name)) {
      const icon = specialFileIcons.get(name)!;
      return icon;
    }

    // TODO: Change the algorithm for extension detection.
    const ext = name.split('.').pop()!;
    if (fileExtensionIcons.has(ext)) {
      const icon = fileExtensionIcons.get(ext)!;
      return icon;
    }

    return defaultIcon;
  }
}
