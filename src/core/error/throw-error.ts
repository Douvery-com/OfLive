export function throwError({
  text,
  code,
  originalError,
}: {
  text: string;
  code: number;
  originalError?: Error;
}): void {
  const error = originalError || new Error(`Hubo un error ${code}:${text}`);
  const msg = `Hubo un error ${code}:${text}, por favor verifíquelo en: \n${error.stack}`;
  const line = '-'.repeat(msg.length + 10);
  console.error(`${line}\n| ❌ ${msg} |\n${line}`);
  throw error;
}
