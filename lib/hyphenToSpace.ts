export function hyphenToSpace(string: string): string {
  const replacedString = string.replace(/-/g, " ");
  return replacedString;
}
