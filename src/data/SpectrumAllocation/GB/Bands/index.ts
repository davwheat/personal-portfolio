import { ISpectrumAllocation } from '@components/BlogComponents/MdxComponents'

import Band1 from './1'
import Band3 from './3'
import Band7 from './7'
import Band8 from './8'
import Band20 from './20'
import Band28 from './28'
import Band32 from './32'
import Band38 from './38'
import Band40 from './40'
import Band67 from './67'
import Band78 from './78'

function mapBand(number: number, data: ISpectrumAllocation[]) {
  return { band: number, data }
}

const AllBands = [
  mapBand(1, Band1),
  mapBand(3, Band3),
  mapBand(7, Band7),
  mapBand(8, Band8),
  mapBand(20, Band20),
  mapBand(28, Band28),
  mapBand(32, Band32),
  mapBand(38, Band38),
  mapBand(40, Band40),
  mapBand(67, Band67),
  mapBand(78, Band78),
]

export { AllBands }
