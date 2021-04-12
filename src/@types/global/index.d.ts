declare global {
  export type ValuesOf<T extends readonly any[]> = T[number]
}

// Need to export something for global to work
export const _ = ''
