export function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

export function truncarDecimales(numero: number, decimales: any) {
  const factor = Math.pow(10, decimales);
  return Math.trunc(numero * factor) / factor;
}
