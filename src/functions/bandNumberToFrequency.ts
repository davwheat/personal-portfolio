const bandFreqs = {
  1: 2100,
  3: 1800,
  7: 2300,
  8: 900,
  20: 800,
  28: 700,
  29: 700,
  32: 1500,
  38: 2600,
  40: 2600,
  67: 700,
  77: 3700,
  78: 3500,
  79: 4700,
}

export default function BandToName(band: number): number {
  return bandFreqs[band] ?? -1
}
