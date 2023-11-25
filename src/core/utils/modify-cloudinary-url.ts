/**
 * Modifica la URL de Cloudinary añadiendo una sección después de '/upload/'
 *
 * @param url URL original de Cloudinary
 * @param newSegment Nuevo segmento para añadir después de '/upload/'
 * @returns Nueva URL modificada
 */
export function modifyCloudinaryUrl(url: string, newSegment: string): string {
  // Buscamos la posición de '/upload/' en la URL original
  const uploadIndex = url.indexOf('/upload/');

  // Si no encontramos '/upload/', devolvemos la URL original
  if (uploadIndex === -1) {
    return url;
  }

  // Calculamos la posición donde insertar el nuevo segmento
  const insertPosition = uploadIndex + '/upload/'.length;

  // Creamos la nueva URL
  const newUrl =
    url.slice(0, insertPosition) + newSegment + '/' + url.slice(insertPosition);

  return newUrl;
}
