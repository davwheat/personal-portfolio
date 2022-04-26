import React, { useRef, useState } from 'react'

import Section from '@components/Design/Section'
import { HighlightedSpectrum, ISpectrumAllocation, SpectrumMap } from '@components/BlogComponents/MdxComponents'
import TextBox from '@components/Inputs/TextBox'

import Breakpoints from '@data/breakpoints'
import bandNumberToName from '@functions/bandNumberToName'

import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { nanoid } from 'nanoid'

const useStyles = makeStyles({
  heading: {
    marginTop: 28,
  },
  fieldsetsContainer: {
    marginTop: 16,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 16,

    [Breakpoints.upTo.phone]: {
      gridTemplateColumns: '1fr',
    },
  },
  highlightFieldset: {
    padding: '16px 24px',
    background: '#fff',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& legend': {
      // Prevent browser rendering it as a fieldset legend
      float: 'left',
      marginBottom: 12,
      fontWeight: 'bold',
    },
  },
  freqFieldset: {
    display: 'grid',
    gap: 16,
    placeContent: 'center',
    gridTemplateColumns: '1fr',

    [Breakpoints.downTo.tablet]: {
      gridTemplateColumns: '1fr 1fr',

      '& > label': {
        // Visually centring because actual centring looks offset
        transform: 'translateY(-4px)',
      },
    },
  },
  clearfix: {
    '&::after': {
      display: 'block',
      content: '""',
      clear: 'both',
    },
  },
  radioGroup: {
    '&:not(:last-child)': {
      marginBottom: 12,
    },
  },
  radio: {
    opacity: 0,
    position: 'absolute',

    '& + label': {
      display: 'block',
      position: 'relative',
      paddingLeft: 'var(--left-pad)',
      WebkitUserSelect: 'none',
      userSelect: 'none',

      '--left-pad': 'calc(1em + 16px)',
      '--radio-size': '1.35em',
      '--radio-border-size': '2px',
      '--radio-y-offset': '0.05em',

      '&::before, &::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        borderRadius: '50%',
        overflow: 'hidden',

        top: 'calc(50% - var(--radio-y-offset))',
        transform: 'translateY(-50%)',

        width: 'var(--size)',
        height: 'var(--size)',

        cursor: 'pointer',
      },

      '&::before': {
        '--size': 'var(--radio-size)',
        left: 0,
        background: 'white',
        border: 'var(--radio-border-size) solid black',
      },

      '&::after': {
        '--bg': 'white',
        '--x-pad': 'calc(var(--radio-border-size) + 4px)',
        '--size': 'calc(var(--radio-size) - (2 * var(--x-pad)))',
        left: 'var(--x-pad)',
        background: 'var(--bg)',
      },
    },

    '&:checked + label::after': {
      '--bg': 'black',
    },
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

  const [highlightValueType, setHighlightValueType] = useState<'ARFCN' | 'frequency'>('ARFCN')
  const [startHighlight, setStartHighlight] = useState<{ text: string; val: number | null }>({ text: '', val: NaN })
  const [endHighlight, setEndHighlight] = useState<{ text: string; val: number | null }>({ text: '', val: NaN })

  const { current: formIds } = useRef({
    highlightTypeArfcn: nanoid(),
    highlightTypeFreq: nanoid(),
  })

  const isHighlightPresent = [startHighlight.val, endHighlight.val].every(v => !isNaN(v) && v)
  const spectrumHighlight: HighlightedSpectrum[] | undefined = !isHighlightPresent
    ? undefined
    : [
        {
          [`start${highlightValueType === 'ARFCN' ? 'Arfcn' : 'Freq'}`]: Math.min(startHighlight.val, endHighlight.val),
          [`end${highlightValueType === 'ARFCN' ? 'Arfcn' : 'Freq'}`]: Math.max(startHighlight.val, endHighlight.val),
          rat: 'lte',
        } as unknown as HighlightedSpectrum,
      ]

  return (
    <Section width="wider">
      <h2 className="text-louder">Frequency deployment</h2>

      <Section width="full" darker>
        <h3 className="text-loud">Highlight spectrum</h3>
        <p>Highlight a section of spectrum with a pink line on the visualisations below using its start and end ARFCN or frequency.</p>

        <div className={classes.fieldsetsContainer}>
          <fieldset className={classes.highlightFieldset}>
            <legend>Highlight by</legend>
            <span className={classes.clearfix} />

            <div className={classes.radioGroup}>
              <input
                type="radio"
                className={classes.radio}
                name="highlight-data-type"
                id={formIds.highlightTypeArfcn}
                value="arfcn"
                onChange={() => setHighlightValueType('ARFCN')}
                checked={highlightValueType === 'ARFCN'}
              />
              <label htmlFor={formIds.highlightTypeArfcn}>ARFCN</label>
            </div>

            <div className={classes.radioGroup}>
              <input
                type="radio"
                className={classes.radio}
                name="highlight-data-type"
                id={formIds.highlightTypeFreq}
                value="frequency"
                onChange={() => setHighlightValueType('frequency')}
                checked={highlightValueType === 'frequency'}
              />
              <label htmlFor={formIds.highlightTypeFreq}>Frequency</label>
            </div>
          </fieldset>

          <fieldset className={clsx(classes.highlightFieldset, classes.freqFieldset)}>
            <TextBox label={`Start ${highlightValueType}`} onInput={v => setStartHighlight({ text: v, val: parseFloat(v) })} />
            <TextBox label={`End ${highlightValueType}`} onInput={v => setEndHighlight({ text: v, val: parseFloat(v) })} />
          </fieldset>
        </div>
      </Section>

      {bandsData.map((bandData, i) => {
        return (
          <React.Fragment key={JSON.stringify(bandData.band)}>
            <h3 id={`band-${bandData.band}`} className={clsx('text-loud', classes.heading)}>
              {Array.isArray(bandData.band) ? `Bands ${bandData.band.join(', ')}` : `Band ${bandData.band}`}
            </h3>

            <SpectrumMap
              data={bandData.data}
              spectrumHighlight={spectrumHighlight}
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
