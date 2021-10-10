export const useOmit = (
    obj: { [key: string]: any },
    keys: string[],
  ): { [key: string]: any } =>
    keys.reduce<{ [key: string]: any }>((acc, key) => {
      const { [key]: keyAlias, ...rest } = acc
      return rest;
    }, obj)