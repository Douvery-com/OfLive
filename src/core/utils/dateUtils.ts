function getDayName(date: Date) {
  return date.toLocaleDateString('es-ES', { weekday: 'long' });
}

function getMonthName(numMonth: number) {
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];
  return months[numMonth];
}

function addLeadingZero(value: number) {
  return value.toString().padStart(2, '0');
}

function formatDateWithMinutes(isoDate: number) {
  const date = new Date(isoDate);
  const dayName = getDayName(date);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  return `${dayName} ${day} de ${month}, ${year} a las ${hours}:${minutes}`;
}

function formatDateWithoutMinutes(isoDate: number) {
  const date = new Date(isoDate);
  const dayName = getDayName(date);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();
  return `${dayName} ${day} de ${month}, ${year}`;
}

export function formatDate({
  isoDate,
  withMinutes = false,
}: {
  isoDate: string;
  withMinutes?: boolean;
}) {
  const iso = Number(isoDate);
  return withMinutes
    ? formatDateWithMinutes(iso)
    : formatDateWithoutMinutes(iso);
}
