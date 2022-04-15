type UKNetworkOperator = 'O2' | 'Vodafone' | 'EE' | 'Three' | 'Three (UK Broadband)'

export interface ArfcnDataItem {
  band: number
  arfcn: number
  operator: UKNetworkOperator
  description: string
  /**
   * Bandwidth in MHz
   */
  bandwidth?: number
}

export interface SimpleArfcnDataItem extends Omit<ArfcnDataItem, 'band'> {}