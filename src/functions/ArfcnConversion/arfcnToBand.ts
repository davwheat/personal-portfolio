import { earfcnCalcData } from './arfcnToFreq'

export function arfcnToBand(rat: 'lte' | 'nr' | 'umts' | 'gsm', arfcn: number, type: 'dl' | 'ul'): number | null {
  if (rat === 'lte') {
    const [band] =
      Object.entries(earfcnCalcData).find(([band, data]) => {
        const maxArfcn = data[`${type}ArfcnOffset`] + (data[`${type}FreqHigh`] - data[`${type}FreqLow`]) / 0.1

        return arfcn >= data[`${type}ArfcnOffset`] && arfcn <= maxArfcn
      }) ?? []

    if (!band) return null

    return parseInt(band)
  }
}
