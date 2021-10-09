export function useFlatMap<S, R>(array: S, keyValue: string): R {
  return (array as any).map((item: any) => item[keyValue]).flat()
}
