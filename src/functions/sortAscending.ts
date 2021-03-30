const collator = new Intl.Collator('en-GB')

export default function sortAscending(a: unknown, b: unknown): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return collator.compare(b, a)
  }

  // @ts-expect-error eek
  return b - a
}
