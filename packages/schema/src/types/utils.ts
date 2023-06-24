export type Prettify<T> = {
  [K in keyof T]: T[K]
} & NonNullable<unknown>

export type Merge<F, S> = Omit<F, keyof S> & S

export type RequiredByKeys<T, K extends keyof T = keyof T> = Omit<
  T & Required<Pick<T, K & keyof T>>,
  never
>

export type Override<T extends object, K extends { [P in keyof T]?: any }> = Omit<T, keyof K> & K

export type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer L}` ? L : never]: T[P]
}

export type AdditionalProperties<T extends object> = T & {
  [key: string]: any
}
