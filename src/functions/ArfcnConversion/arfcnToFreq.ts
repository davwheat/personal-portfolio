interface ArfcnCalcData {
  /**
   * Minimum downstream frequency for the band
   */
  dlFreqLow: number
  /**
   * Maximum downstream frequency for the band
   */
  dlFreqHigh: number
  /**
   * Minimum upstream frequency for the band
   */
  ulFreqLow: number
  /**
   * Maximum upstream frequency for the band
   */
  ulFreqHigh: number
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
    dlFreqHigh: 2170,
    ulFreqLow: 1920,
    ulFreqHigh: 1980,
    dlArfcnOffset: 0,
    ulArfcnOffset: 18000,
  },
  2: {
    dlFreqLow: 1930,
    dlFreqHigh: 1990,
    ulFreqLow: 1850,
    ulFreqHigh: 1910,
    dlArfcnOffset: 600,
    ulArfcnOffset: 18600,
  },
  3: {
    dlFreqLow: 1805,
    dlFreqHigh: 1880,
    ulFreqLow: 1710,
    ulFreqHigh: 1785,
    dlArfcnOffset: 1200,
    ulArfcnOffset: 19200,
  },
  4: {
    dlFreqLow: 2110,
    dlFreqHigh: 2155,
    ulFreqLow: 1710,
    ulFreqHigh: 1755,
    dlArfcnOffset: 1950,
    ulArfcnOffset: 19950,
  },
  5: {
    dlFreqLow: 869,
    dlFreqHigh: 894,
    ulFreqLow: 824,
    ulFreqHigh: 849,
    dlArfcnOffset: 2400,
    ulArfcnOffset: 20400,
  },
  7: {
    dlFreqLow: 2620,
    dlFreqHigh: 2690,
    ulFreqLow: 2500,
    ulFreqHigh: 2570,
    dlArfcnOffset: 2750,
    ulArfcnOffset: 20750,
  },
  8: {
    dlFreqLow: 925,
    dlFreqHigh: 960,
    ulFreqLow: 880,
    ulFreqHigh: 915,
    dlArfcnOffset: 3450,
    ulArfcnOffset: 21450,
  },
  11: {
    dlFreqLow: 1475.9,
    dlFreqHigh: 1495.9,
    ulFreqLow: 1427.9,
    ulFreqHigh: 1447.9,
    dlArfcnOffset: 4750,
    ulArfcnOffset: 22750,
  },
  12: {
    dlFreqLow: 728,
    dlFreqHigh: 746,
    ulFreqLow: 699,
    ulFreqHigh: 716,
    dlArfcnOffset: 5000,
    ulArfcnOffset: 23000,
  },
  13: {
    dlFreqLow: 746,
    dlFreqHigh: 756,
    ulFreqLow: 777,
    ulFreqHigh: 787,
    dlArfcnOffset: 5180,
    ulArfcnOffset: 23180,
  },
  14: {
    dlFreqLow: 758,
    dlFreqHigh: 768,
    ulFreqLow: 788,
    ulFreqHigh: 798,
    dlArfcnOffset: 5280,
    ulArfcnOffset: 23280,
  },
  17: {
    dlFreqLow: 734,
    dlFreqHigh: 746,
    ulFreqLow: 704,
    ulFreqHigh: 716,
    dlArfcnOffset: 5730,
    ulArfcnOffset: 23730,
  },
  18: {
    dlFreqLow: 860,
    dlFreqHigh: 875,
    ulFreqLow: 815,
    ulFreqHigh: 830,
    dlArfcnOffset: 5850,
    ulArfcnOffset: 23850,
  },
  19: {
    dlFreqLow: 875,
    dlFreqHigh: 890,
    ulFreqLow: 830,
    ulFreqHigh: 845,
    dlArfcnOffset: 6000,
    ulArfcnOffset: 24000,
  },
  20: {
    dlFreqLow: 791,
    dlFreqHigh: 821,
    ulFreqLow: 832,
    ulFreqHigh: 862,
    dlArfcnOffset: 6150,
    ulArfcnOffset: 24150,
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
