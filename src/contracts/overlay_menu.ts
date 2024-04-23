export interface OverlayMenuItem {
  label: string
  isDanger?: boolean
}

export interface OverlayMenuItemGroup {
  content: OverlayMenuItem[]
}
