export type FieldsObject = {
  [key: string]: FieldsObject | boolean;
};

export const generateFields = (obj: FieldsObject): string => {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === "object") {
        return `${key} { ${generateFields(value)} }`;
      }
      return key;
    })
    .join("\n");
};
