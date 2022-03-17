import type { ArfcnDataItem, SimpleArfcnDataItem } from './'

function mapListToBand(band: number, list: SimpleArfcnDataItem[]): ArfcnDataItem[] {
  const newList = list as ArfcnDataItem[]

  return newList.map(x => {
    x.band = band
    return x
  })
}

const B1: SimpleArfcnDataItem[] = [
  {
    arfcn: 199,
    bandwidth: 10,
    operator: 'O2',
    description: 'Refarmed 3G',
  },
  {
    arfcn: 99,
    bandwidth: 10,
    operator: 'Three',
    description: 'Standard B1 deployment',
  },
  {
    arfcn: 299,
    bandwidth: 10,
    operator: 'Vodafone',
    description: 'Partial 3G refarm (UARFCNs 10712 and 10687)',
  },
  {
    arfcn: 323,
    bandwidth: 15,
    operator: 'Vodafone',
    description: 'Full 3G refarm',
  },
  {
    arfcn: 347,
    bandwidth: 15,
    operator: 'Vodafone',
    description: 'Partial 3G refarm (UARFCNs 10736 and 10712)',
  },
  {
    arfcn: 522,
    bandwidth: 15,
    operator: 'EE',
    description: 'Standard B1 deployment',
  },
]

const B3: SimpleArfcnDataItem[] = [
  {
    arfcn: 1815,
    bandwidth: 20,
    operator: 'EE',
    description: 'Standard B3 deployment - widened version of EARFCN 1788',
  },
  {
    arfcn: 1808,
    bandwidth: 10,
    operator: 'EE',
    description: 'Small cell standard B3 deployment',
  },
  {
    arfcn: 1788,
    bandwidth: 15,
    operator: 'EE',
    description: 'Standard B3 deployment - widened version of EARFCN 1761',
  },
  {
    arfcn: 1761,
    bandwidth: 10,
    operator: 'EE',
    description: 'Standard B3 deployment - replaced EARFCN 1811',
  },
  {
    arfcn: 1617,
    bandwidth: 20,
    operator: 'EE',
    description: 'Standard B3 deployment - used as part of typical 35 MHz B3 deployment',
  },
  {
    arfcn: 1392,
    bandwidth: 15,
    operator: 'Three',
    description: 'Standard B3 deployment - base coverage layer',
  },
  {
    arfcn: 1288,
    bandwidth: 5,
    operator: 'Vodafone',
    description: 'Standard B3 deployment',
  },
  {
    arfcn: 1228,
    bandwidth: 5,
    operator: 'O2',
    description: 'Small cell or DAS standard B3 deployment',
  },
  {
    arfcn: 1226,
    bandwidth: 5,
    operator: 'O2',
    description: 'Macrocell standard B3 deployment',
  },
]

const B20: SimpleArfcnDataItem[] = [
  {
    arfcn: 6400,
    bandwidth: 10,
    operator: 'O2',
    description: 'Standard B20 deployment',
  },
  {
    arfcn: 6300,
    bandwidth: 10,
    operator: 'Vodafone',
    description: 'Standard B20 deployment',
  },
  {
    arfcn: 6225,
    bandwidth: 5,
    operator: 'Three',
    description: 'Standard B20 deployment',
  },
  {
    arfcn: 6175,
    bandwidth: 5,
    operator: 'EE',
    description: 'Standard B20 deployment',
  },
]

const EARFCNs: ArfcnDataItem[] = [...mapListToBand(1, B1), ...mapListToBand(3, B3), ...mapListToBand(20, B20)]

export default EARFCNs
