export function resolvePath(relativePath, currentPath) {
  if (relativePath) {
    return new URL(relativePath, currentPath).href
  }
  return ''
}
