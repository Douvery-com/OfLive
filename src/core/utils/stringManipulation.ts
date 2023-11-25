export function replaceSpacesWithHyphens({ str }: any) {
  return str.replace(/\s+/g, "-");
}

export function formatGender(gender: any) {
  return gender.toString().replace(/,/g, " - ");
}

export function removeSpacesFromEncodedString(encodedStringWithSpaces: string) {
  const decodedString = decodeURIComponent(encodedStringWithSpaces);
  const stringWithoutSpaces = decodedString.replace(/ /g, "");
  const encodedStringWithoutSpaces = encodeURIComponent(stringWithoutSpaces);

  const finalString = encodedStringWithoutSpaces.replace(/%2F/g, "/");
  return finalString;
}

export function replaceSpacesWithPlus(encodedStringWithSpaces: string) {
  const decodedString = decodeURIComponent(encodedStringWithSpaces);
  const stringWithPlus = decodedString.replace(/ /g, "+");
  const encodedStringWithPlus = encodeURIComponent(stringWithPlus);

  const finalString = encodedStringWithPlus.replace(/%2F/g, "/");
  return finalString;
}
