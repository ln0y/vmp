export type Prettify<T> = {
  [K in keyof T]: T[K]
} & NonNullable<unknown>

export type Merge<F, S> = Omit<F, keyof S> & S
