export function replaceUnderdashBySpace({ text }: { text: string }) {
  if (!text) return '';
  return text.replace(/_/g, ' ');
}
