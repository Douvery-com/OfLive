export function getStatusOrderMessage(status: number) {
  switch (status) {
    case 0:
      return 'Orden creada';
    case 1:
      return 'Su orden esta siendo enpacada';
    case 2:
      return 'Orden enviada';
    case 3:
      return 'Orden en camino';
    case 4:
      return 'Orden entregada';
    case 5:
      return 'Orden cancelada';
    default:
      return 'Orden creada';
  }
}
