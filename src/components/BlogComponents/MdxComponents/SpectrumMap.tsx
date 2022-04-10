import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import Colors from '@data/colors.json'

export interface IColorPair {
  back: string
  front: string
}

export interface ISpectrumAllocation {
  owner: string
  ownerLongName?: string
  /**
   * Override the default color provided by the `owner`.
   */
  colorOverride?: IColorPair
  details?: string | string[]
  /**
   * Start of allocation in MHz.
   */
  freqStart: number
  /**
   * End of allocation in MHz.
   */
  freqEnd: number
  type: 'fddUp' | 'fddDown' | 'tdd' | 'unused' | 'unknown'
  /**
   * The other piece of spectrum which this is paired with.
   */
  pairedWith?: {
    /**
     * Start of allocation in MHz.
     */
    freqStart: number
    /**
     * End of allocation in MHz.
     */
    freqEnd: number
    type: 'fddUp' | 'fddDown' | 'tdd' | 'unused' | 'unknown'
  }

  arfcns?: number[]
  uarfcns?: number[]
  earfcns?: number[]
  nrarfcns?: number[]
}

export interface ISpectrumMapProps {
  caption?: string
  note?: string
  data: ISpectrumAllocation[]
}

export interface ISpectrumMapItemProps {
  allocation: ISpectrumAllocation
  isSelected: boolean
  onClick: (allocation: ISpectrumAllocation) => void
}

export interface ISpectrumMapDetailsProps {
  allocation: ISpectrumAllocation
}

const OwnerColorMap: Record<string, IColorPair> = {
  O2: {
    back: '#000066',
    front: '#fff',
  },
  Vodafone: {
    back: '#e60000',
    front: '#fff',
  },
  EE: {
    back: '#007b85',
    front: '#fff',
  },
  Three: {
    back: '#ff7c69',
    front: '#000',
  },
}

function round(num: number): number {
  return Math.round(num * 100) / 100
}

function getSpectrumTypeDescription(type: ISpectrumAllocation['type']): string {
  return {
    fddUp: 'FDD uplink',
    fddDown: 'FDD downlink',
    tdd: 'TDD uplink and downlink',
    unknown: 'Unknown',
    unused: 'Unused',
  }[type]
}

function getOwnerColor(owner: string): IColorPair {
  return (
    OwnerColorMap[owner] || {
      back: '#ddd',
      front: '#000',
    }
  )
}

/**
 * Visualisation accuracy in Hertz.
 */
const HERTZ_ACCURACY = 10_000

const useSpectrumMapStyles = makeStyles({
  root: {
    border: '2px solid #000',
    marginTop: '1em',
    marginBottom: '1em',
  },
  container: {
    padding: 16,
  },
  map: {
    marginTop: 12,
    padding: 4,
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--sections), minmax(0.001px, 1fr))',
    minWidth: '100%',
    overflowX: 'auto',
    justifyItems: 'stretch',
  },
  spectrumInfo: {
    marginTop: 12,
  },
  footer: {
    borderTop: `2px solid ${Colors.neutralGrey}`,
    padding: '8px 16px',
    '& p': {
      marginBottom: '0 !important',
    },
  },
  scale: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  note: {
    marginTop: 8,
  },
})

const useSpectrumMapItemStyles = makeStyles({
  itemRoot: {
    // reset
    appearance: 'none',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    display: 'inline',
    margin: 0,
    position: 'relative',

    outline: `2px solid #000`,

    cursor: 'pointer',
    backgroundColor: 'var(--owner-color)',
    color: 'var(--owner-color-front)',
    padding: 4,
    height: '100%',
    gridColumn: 'span var(--bandwidth)',

    '&:focus-visible': {
      outlineColor: Colors.primaryBlue,
    },

    '&[data-selected=true]': {
      outlineColor: Colors.primaryRed,
      zIndex: 10,
    },

    '&:focus-visible ': {
      outlineWidth: 4,
      zIndex: 11,
    },

    '& p': {
      margin: '0 !important',
    },
  },
})

const useSpectrumMapDetailsStyles = makeStyles({
  detailsRoot: {
    '& dt': {
      fontWeight: 'bold',
    },
    '& dd:not(:last-child)': {
      marginBottom: 6,
    },
    '& dd p': {
      marginBottom: 2,
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
})

export function SpectrumMap({ caption, data, note }: ISpectrumMapProps) {
  const classes = useSpectrumMapStyles()

  const minMhz = Math.min(...data.map(a => a.freqStart))
  const maxMhz = Math.max(...data.map(a => a.freqEnd))
  const gridColumns = Math.floor(((maxMhz - minMhz) * 100_000) / HERTZ_ACCURACY)

  const sortedData = data.sort((a, b) => a.freqStart - b.freqStart)

  const [selectedSpectrumBlock, setSelectedSpectrumBlock] = useState<ISpectrumAllocation>(null)

  return (
    <figure className={classes.root} style={{ '--sections': gridColumns } as any}>
      <div className={classes.container}>
        {caption && <figcaption className="text-loud text-center">{caption}</figcaption>}

        <div className={classes.map}>
          {sortedData.map(allocation => (
            <SpectrumMapItem
              key={`${allocation.owner}__${allocation.freqStart}`}
              isSelected={allocation === selectedSpectrumBlock}
              allocation={allocation}
              onClick={() => setSelectedSpectrumBlock(allocation)}
            />
          ))}
        </div>

        <div className={classes.scale}>
          <span className="text-whisper">{round(minMhz)} MHz</span>
          <span className="text-whisper">{round(maxMhz)} MHz</span>
        </div>

        <div aria-live="polite" className={classes.spectrumInfo}>
          {selectedSpectrumBlock !== null && <SpectrumMapDetails allocation={selectedSpectrumBlock} />}
        </div>
      </div>

      <footer className={clsx(classes.footer, 'softer-bg')}>
        <p className="text-whisper-up">Click on a spectrum block to view more information about it.</p>
        {note && <p className={clsx('text-whisper-up', classes.note)}>{note}</p>}
      </footer>
    </figure>
  )
}

function SpectrumMapItem({ allocation, onClick, isSelected }: ISpectrumMapItemProps) {
  const classes = useSpectrumMapItemStyles()
  const { owner, details, freqStart, freqEnd, type, pairedWith } = allocation
  const color = allocation.colorOverride || getOwnerColor(owner)

  const bandwidthMhz = freqEnd - freqStart
  const columnCount = Math.floor((bandwidthMhz * 100_000) / HERTZ_ACCURACY)

  return (
    <button
      data-selected={isSelected}
      onClick={() => onClick(allocation)}
      className={classes.itemRoot}
      style={
        {
          '--owner-color': color.back,
          '--owner-color-front': color.front,
          '--bandwidth': columnCount,
        } as any
      }
    >
      <p className="text-center">{owner}</p>
      <p className="text-center text-whisper">{round(bandwidthMhz)} MHz</p>
      <p className="sr-only">Click for more spectrum info</p>
    </button>
  )
}

function SpectrumMapDetails({ allocation }: ISpectrumMapDetailsProps) {
  const classes = useSpectrumMapDetailsStyles()
  const { owner, ownerLongName, details, freqStart, freqEnd, type, pairedWith, arfcns, uarfcns, earfcns, nrarfcns } = allocation

  const usageInfo: Record<string, number[]> = {}
  arfcns && (usageInfo['2G GSM'] = arfcns)
  uarfcns && (usageInfo['3G UMTS'] = uarfcns)
  earfcns && (usageInfo['4G LTE'] = earfcns)
  nrarfcns && (usageInfo['5G NR'] = nrarfcns)

  return (
    <dl className={classes.detailsRoot}>
      <dt>Operated by:</dt>
      <dd>{ownerLongName || owner}</dd>

      <dt>Bandwidth:</dt>
      <dd>
        {round(freqEnd - freqStart)} MHz ({round(freqStart)} &ndash; {round(freqEnd)} MHz)
      </dd>

      <dt>Spectrum type:</dt>
      <dd>
        {getSpectrumTypeDescription(type)}
        {pairedWith && (
          <>
            , paired with {round(pairedWith.freqStart)} &ndash; {round(pairedWith.freqEnd)} MHz of {getSpectrumTypeDescription(pairedWith.type)}
          </>
        )}
      </dd>

      {(arfcns || uarfcns || earfcns || nrarfcns) && Object.keys(usageInfo).length !== 0 && (
        <>
          <dt>Used for:</dt>
          <dd>
            {Object.entries(usageInfo).map(([tech, arfcns]) => (
              <p className="text-speak" key={tech}>
                <strong>{tech}: </strong>
                {arfcns.length ? <>{arfcns.join(', ')}</> : 'various/unconfirmed'}
              </p>
            ))}
          </dd>
        </>
      )}

      {details && (
        <>
          <dt>Details:</dt>
          <dd>{Array.isArray(details) ? details.map(detail => <p key={detail}>{detail}</p>) : details}</dd>
        </>
      )}
    </dl>
  )
}
