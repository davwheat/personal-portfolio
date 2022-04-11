import bandNumberToFrequency from './bandNumberToFrequency'

const bandNames = {
  1: 'IMT',
  3: 'DCS',
  7: 'IMT-E',
  8: 'GSM',
  20: 'EU Digital Dividend',
  28: 'APT',
  29: 'SDL',
  32: 'L-Band SDL',
  38: 'IMT-E',
  40: 'S-Band',
  46: 'LAA',
  67: 'EU SDL',
  77: 'C-Band',
  78: 'C-Band',
  79: 'C-Band',
}

export default function BandToName(band: number): string {
  return bandNames[band] ? `${bandNumberToFrequency(band)} MHz ${bandNames[band]}` : `${bandNumberToFrequency(band)}`
}
