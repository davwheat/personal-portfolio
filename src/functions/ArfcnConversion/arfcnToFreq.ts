interface ArfcnCalcData {
  /**
   * Minimum downstream frequency for the band
   */
  dlFreqLow: number
  /**
   * Minimum upstream frequency for the band
   */
  ulFreqLow: number
  /**
   * Offset for DL ARFCN
   */
  dlArfcnOffset: number
  /**
   * Offset for UL ARFCN
   */
  ulArfcnOffset: number
}

export const earfcnCalcData: Record<number, ArfcnCalcData> = {
  1: {
    dlFreqLow: 2100,
    ulFreqLow: 1920,
    dlArfcnOffset: 0,
    ulArfcnOffset: 18000,
  },
  2: {
    dlFreqLow: 1930,
    ulFreqLow: 1850,
    dlArfcnOffset: 600,
    ulArfcnOffset: 18600,
  },
  3: {
    dlFreqLow: 1805,
    ulFreqLow: 1710,
    dlArfcnOffset: 1200,
    ulArfcnOffset: 19200,
  },
  4: {
    dlFreqLow: 2110,
    ulFreqLow: 1710,
    dlArfcnOffset: 1950,
    ulArfcnOffset: 19950,
  },
  5: {
    dlFreqLow: 869,
    ulFreqLow: 824,
    dlArfcnOffset: 2400,
    ulArfcnOffset: 20400,
  },
  6: {
    dlFreqLow: 875,
    ulFreqLow: 830,
    dlArfcnOffset: 2650,
    ulArfcnOffset: 20650,
  },
  7: {
    dlFreqLow: 2620,
    ulFreqLow: 2750,
    dlArfcnOffset: 2750,
    ulArfcnOffset: 20750,
  },
  8: {
    dlFreqLow: 925,
    ulFreqLow: 880,
    dlArfcnOffset: 3450,
    ulArfcnOffset: 21450,
  },
  9: {
    dlFreqLow: 1844.9,
    ulFreqLow: 1427.9,
    dlArfcnOffset: 4750,
    ulArfcnOffset: 22750,
  },
  10: {
    dlFreqLow: 2110,
    ulFreqLow: 1710,
    dlArfcnOffset: 4150,
    ulArfcnOffset: 22150,
  },
  11: {
    dlFreqLow: 1475.9,
    ulFreqLow: 1427.9,
    dlArfcnOffset: 4750,
    ulArfcnOffset: 22750,
  },
  12: {
    dlFreqLow: 728,
    ulFreqLow: 698,
    dlArfcnOffset: 5000,
    ulArfcnOffset: 23000,
  },
  13: {
    dlFreqLow: 746,
    ulFreqLow: 777,
    dlArfcnOffset: 5180,
    ulArfcnOffset: 23180,
  },
  14: {
    dlFreqLow: 758,
    ulFreqLow: 788,
    dlArfcnOffset: 5280,
    ulArfcnOffset: 23280,
  },
}

export function arfcnToFreq(rat: 'lte' | 'nr' | 'umts' | 'gsm', arfcn: number, type: 'dl' | 'ul'): number | null {
  if (rat === 'lte') {
    const indexPlusOne = Object.values(earfcnCalcData).findIndex(v => v[`${type}ArfcnOffset`] > arfcn)
    if (indexPlusOne === -1) return null

    const data = Object.values(earfcnCalcData)[indexPlusOne - 1]
    return data[`${type}FreqLow`] + 0.1 * (arfcn - data[`${type}ArfcnOffset`])
  }
}
