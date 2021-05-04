declare global {
  export type ValuesOf<T extends readonly unknown[]> = T[number]
}

// Need to export something for global to work
export const _ = ''
