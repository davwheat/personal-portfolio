import React from 'react'

import Section from '@components/Design/Section'
import { ISpectrumAllocation, SpectrumMap } from '@components/BlogComponents/MdxComponents'

import { makeStyles } from '@material-ui/core'
import bandNumberToName from '@functions/bandNumberToName'

import clsx from 'clsx'

const useStyles = makeStyles({
  heading: {
    marginTop: 28,
  },
})

interface IAllSpectrumMaps {
  bandsData: {
    band: string | number | number[] | string[]
    data: ISpectrumAllocation[]
  }[]
  locationName: string
}

export default function AllSpectrumMaps({ bandsData, locationName }: IAllSpectrumMaps) {
  const classes = useStyles()

  return (
    <Section width="wider">
      <h2 className="text-louder">Frequency deployment</h2>

      {bandsData.map((bandData, i) => {
        return (
          <React.Fragment key={JSON.stringify(bandData.band)}>
            <h3 id={`band-${bandData.band}`} className={clsx('text-loud', classes.heading)}>
              {Array.isArray(bandData.band) ? `Bands ${bandData.band.join(', ')}` : `Band ${bandData.band}`}
            </h3>

            <SpectrumMap
              data={bandData.data}
              caption={`${locationName} spectrum deployment for ${
                Array.isArray(bandData.band) ? `Bands ${bandData.band.join(', ')}` : `Band ${bandData.band} (${bandNumberToName(bandData.band)})`
              }`}
            />
          </React.Fragment>
        )
      })}
    </Section>
  )
}
