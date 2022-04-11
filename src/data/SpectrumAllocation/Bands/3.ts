import type { ISpectrumAllocation } from '@components/BlogComponents/MdxComponents'

const DLStart = 1805.1
const ULStart = 1704.3

const Band3: ISpectrumAllocation[] = [
  {
    owner: 'O2',
    freqStart: DLStart,
    freqEnd: DLStart + 5.8,
    type: 'fddDown',
    pairedWith: {
      type: 'fddUp',
      freqStart: ULStart,
      freqEnd: ULStart + 5.8,
    },
    earfcns: [1226, 1228],
    details: ['Final 0.8 MHz are unused.'],
  },
  {
    owner: 'VF',
    freqStart: DLStart + 5.8,
    freqEnd: DLStart + 11.6,
    type: 'fddDown',
    pairedWith: {
      type: 'fddUp',
      freqStart: ULStart + 5.8,
      freqEnd: ULStart + 11.6,
    },
    earfcns: [1288],
    details: ['Final 0.8 MHz are unused.'],
  },
  {
    owner: 'Three',
    freqStart: DLStart + 11.6,
    freqEnd: DLStart + 26.6,
    type: 'fddDown',
    pairedWith: {
      type: 'fddUp',
      freqStart: ULStart + 11.6,
      freqEnd: ULStart + 26.6,
    },
    earfcns: [1392],
  },
  {
    owner: 'EE',
    freqStart: DLStart + 26.6,
    freqEnd: DLStart + 31.6,
    type: 'fddDown',
    pairedWith: {
      type: 'fddUp',
      freqStart: ULStart + 26.6,
      freqEnd: ULStart + 31.6,
    },
    arfcns: 'ARFCNs 645-669',
  },
  {
    owner: 'EE',
    freqStart: DLStart + 31.6,
    freqEnd: DLStart + 51.6,
    type: 'fddDown',
    pairedWith: {
      type: 'fddUp',
      freqStart: ULStart + 31.6,
      freqEnd: ULStart + 51.6,
    },
    earfcns: [1617],
  },
  {
    owner: 'EE',
    freqStart: DLStart + 51.6,
    freqEnd: DLStart + 61.6,
    type: 'fddDown',
    pairedWith: {
      type: 'fddUp',
      freqStart: ULStart + 51.6,
      freqEnd: ULStart + 61.6,
    },
    earfcns: [1761, 1815],
    details: ['EARFCN 1815 split across this and next block.'],
  },
  {
    owner: 'EE',
    freqStart: DLStart + 61.6,
    freqEnd: DLStart + 71.6,
    type: 'fddDown',
    pairedWith: {
      type: 'fddUp',
      freqStart: ULStart + 61.6,
      freqEnd: ULStart + 71.6,
    },
    earfcns: [1815],
    nrarfcns: [374190, 374210, 374280],
    details: ['EARFCN 1815 split across this and previous block.'],
  },
]

export default Band3
