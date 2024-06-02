export interface OverlayMenuItem {
  label: string;
  isDanger?: boolean;
}

export interface OverlayMenuGroup {
  content: OverlayMenuItem[];
}

export interface OverlayMenuPosition {
  x: number;
  y: number;
}
