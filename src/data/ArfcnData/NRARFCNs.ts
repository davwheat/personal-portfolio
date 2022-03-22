import type { ArfcnDataItem, SimpleArfcnDataItem } from '.'

function mapListToBand(band: number, list: SimpleArfcnDataItem[]): ArfcnDataItem[] {
  const newList = list as ArfcnDataItem[]

  return newList.map(x => {
    x.band = band
    return x
  })
}

const n1: SimpleArfcnDataItem[] = [
  {
    arfcn: 432530,
    bandwidth: 15,
    operator: 'EE',
    description: 'NR only trial - deployment',
  },
  {
    arfcn: 433250,
    bandwidth: 15,
    operator: 'EE',
    description: 'NR + LTE DSS - trial deployment',
  },
]

const n3: SimpleArfcnDataItem[] = [
  {
    arfcn: 374190,
    bandwidth: 10,
    operator: 'EE',
    description: 'NR only trial - deployment',
  },
]

const n78: SimpleArfcnDataItem[] = [
  {
    arfcn: 631392,
    bandwidth: 40,
    operator: 'Three',
    description: 'E/// NR CA n78 deployment - limited trial areas',
  },
  {
    arfcn: 632666,
    bandwidth: 20,
    operator: 'Three',
    description: 'Huawei NR CA n78 deployment - limited trial areas',
  },
  {
    arfcn: 633696,
    bandwidth: 40,
    operator: 'O2',
    description: 'Huawei or E/// - Standard n78 deployment - primary carrier (n78C1)',
  },
  {
    arfcn: 634656,
    bandwidth: 40,
    operator: 'O2',
    description: 'Nokia - Standard n78 deployment - primary carrier (n78C1)',
  },
  {
    arfcn: 634666,
    bandwidth: 40,
    operator: 'O2',
    description: 'E/// - Standard n78 deployment - primary carrier (n78C1)',
  },
  {
    arfcn: 634366,
    bandwidth: 20,
    operator: 'O2',
    description: 'E/// - 20 MHz n78 deployment - primary carrier (n78C1)',
  },
  {
    arfcn: 636334,
    bandwidth: 40,
    operator: 'EE',
    description: 'Huawei - Standard n78 deployment - primary carrier (n78C1)',
  },
  {
    arfcn: 636344,
    bandwidth: 40,
    operator: 'EE',
    description: 'Nokia - Standard n78 deployment - primary carrier (n78C1)',
  },
  {
    arfcn: 636384,
    bandwidth: 40,
    operator: 'EE',
    description: 'E/// - Standard n78 deployment - primary carrier (n78C1)',
  },
  {
    arfcn: 646656,
    bandwidth: 40,
    operator: 'EE',
    description: 'E/// - Standard n78 deployment - secondary carrier (n78C2)',
  },
  {
    arfcn: 640548,
    bandwidth: 100,
    operator: 'Three',
    description: 'Standard n78 deployment - all deployments in 100 MHz block (even if only 40-90 MHz bandwidth)',
  },
]

const EARFCNs: ArfcnDataItem[] = [...mapListToBand(1, n1), ...mapListToBand(3, n3), ...mapListToBand(78, n78)]

export default EARFCNs
