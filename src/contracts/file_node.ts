export default interface FileNode {
  name: string
  isDirectory: boolean
  dirContent?: FileNode[]
}
