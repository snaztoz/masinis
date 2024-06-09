import { IconType } from 'react-icons/lib';
import { ReactNode } from 'react';

export default interface TabItem {
  id: string;
  title: string;
  isActive: boolean;
  view: () => ReactNode;
  icon?: {
    el: IconType;
    className: string;
  };
}
