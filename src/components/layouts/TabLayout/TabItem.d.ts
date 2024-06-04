import { ReactNode } from 'react';

export default interface TabItem {
  id: string;
  title: string;
  view: ReactNode;
}
