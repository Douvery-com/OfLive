export function formatPhoneNumber({
  phoneNumber,
}: {
  phoneNumber: string;
}): string | null {
  const cleanNumber = phoneNumber.replace(/\D/g, '');

  // Asegurarse de que el número tiene la longitud esperada (9 dígitos)
  if (cleanNumber.length !== 10) {
    return 'Número de teléfono inválido';
  }

  // Añadir guiones y prefijo
  const formattedNumber =
    cleanNumber.substring(0, 3) +
    '-' +
    cleanNumber.substring(3, 6) +
    '-' +
    cleanNumber.substring(6, 10);
  return '+1 ' + formattedNumber;
}
