export type GBNetworkOperator = 'O2' | 'Vodafone' | 'EE' | 'Three' | 'Three (UK Broadband)'
export type DKNetworkOperator = 'TDC' | '3 DK' | 'Telia-Telenor'

export interface ArfcnDataItem<CountryOperators extends string> {
  band: number
  arfcn: number
  operator: CountryOperators
  description: string
  /**
   * Bandwidth in MHz
   */
  bandwidth?: number
}

export interface SimpleArfcnDataItem<Country extends string = string> extends Omit<ArfcnDataItem<Country>, 'band'> {}
