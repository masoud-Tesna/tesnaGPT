export function removeEmptyKey<T extends Record<string, any>>(obj: T): Partial<T> {
  const newObj: Partial<T> = { ...obj };
  Object.keys(newObj).forEach(key => {
    if (newObj[ key ] === '' || newObj[ key ] === null || newObj[ key ] === undefined) {
      delete newObj[ key ];
    }
  });
  return newObj;
}
