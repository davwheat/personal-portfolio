import { ISpectrumAllocation } from '@components/BlogComponents/MdxComponents'

export function mapBandAndData(number: number | string | number[] | string[], data: ISpectrumAllocation[]) {
  return { band: number, data }
}
