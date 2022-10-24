export const resolveObjectByString = (obj: object, path: string) => {
  return path
    .replace(/\[|\]\.?/g, '.')
    .split('.')
    .filter(s => s)
    .reduce((acc: any, val: any) => acc && acc[val], obj);
};
