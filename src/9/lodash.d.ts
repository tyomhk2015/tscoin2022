declare module "lodash" {
  function head<T>(arr: T[]): T;

  function hasIn<T>(
    object: { [key: string]: T },
    key: string
    ): boolean;

  function isBoolean<T>(value: T): boolean;

  function toString<T>(value: T): string;

  function split(
    string: String[],
    separator: RegExp|string,
    limit: number
    ): String[]
  
  function hasPath<T>(
    object: T,
    path: string[]|string
    ): boolean;

  function filter<T>(
    array: T[],
    predicate: (element: T, index: number, array: T[]) => boolean[]
    ): T[];
  
  function every<T>(
    array: T[],
    predicate: (element: T, index: number, array: T[]) => boolean[]
    ): boolean;

  function map<T>(
    array: T[],
    iterate: (
      element: T,
      index: number, array: T[]) => T
    ): T[];
}
