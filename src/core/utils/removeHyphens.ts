export function removeHyphens(input: string): string {
  const result = input.replace(/-/g, " ");
  return result.charAt(0).toUpperCase() + result.slice(1);
}
