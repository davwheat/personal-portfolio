import React, { useRef, useState } from 'react'

import { FactBox } from '@components/BlogComponents/MdxComponents'
import Breakpoints from '@data/breakpoints'
import Colors from '@data/colors.json'

import { makeStyles, useMediaQuery } from '@material-ui/core'

import MastIcon from '@assets/icons/mast.inline.svg'
import PhoneIcon from '@assets/icons/phone.inline.svg'
import generateTransitions from '@functions/generateTransitions'
import clsx from 'clsx'
import { useVisible } from 'react-hooks-visible'

const useStyles = makeStyles({
  root: {
    border: '2px solid #000',
    padding: 16,
    marginTop: '1em',
    marginBottom: '1em',
    paddingBottom: 0,
  },
  container: {
    marginTop: 12,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    gap: 16,
    [Breakpoints.upTo.desktopSmall]: {
      gridTemplateColumns: '1fr',
    },
  },
  controls: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 4,
    columnGap: 16,
    width: 'max-content',
    margin: 'auto',
    [Breakpoints.upTo.phone]: {
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
    },
  },
  data: {
    width: 'max-content',
    '& p': {
      marginBottom: '2px !important',
      width: 'max-content',
    },
  },
  diagramContainer: {
    marginTop: 16,
    height: 500,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    WebkitUserSelect: 'none',
    userSelect: 'none',
  },
  coverageCircle: {
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(1px * var(--coverage-size))',
    height: 'calc(1px * var(--coverage-size))',
    left: '50%',
    top: '50%',
    background: '#ff000020',
    transform: 'translate(-50%, -50%)',
  },
  mast: {
    display: 'block',
    margin: 'auto',
    width: 50,
    color: '#00aa00',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  phoneList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  },
  ue: {
    position: 'absolute',
    width: 48,
    height: 48,
    display: 'block',
    transform:
      'rotate(calc(360deg / var(--total) * var(--this)))' + // Rotate facing outwards from circle
      'translateY(calc(1px * var(--distance) / 2))' + // Move across radius
      'rotate(calc(-360deg / var(--total) * var(--this)))', // Undo rotation to make vertical again

    '&.transcieving': {
      color: '#00aa00',
    },
  },
  dataTransfer: {
    width: 4,
    background: '#f005',
    height: 'calc((var(--distance) * 1px - 36px) / 2)',
    transform: 'translateX(-50%) rotate(calc(360deg / var(--total) * var(--this)))',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transformOrigin: '50% 0',
    ...generateTransitions(['transform', 'height'], 'short'),
  },
  footer: {
    borderTop: `2px solid ${Colors.neutralGrey}`,
    padding: '8px 16px',
    marginLeft: -16,
    marginRight: -16,
    marginTop: 16,

    '& p:last-child': {
      margin: '0 !important',
    },
  },
})

const AvailableFrequencies = [
  { frequency: 800, name: 'B20', coverageSize: 500 },
  { frequency: 1800, name: 'B3', coverageSize: 350 },
  { frequency: 2600, name: 'B7', coverageSize: 200 },
] as const

const UEDistributionData = [
  { distance: 140, count: 6 },
  { distance: 290, count: 10 },
  { distance: 435, count: 14 },
]

const BANDWIDTH = 20
const RESOURCE_BLOCKS = 100

export default function CoverageResourceBlocksDiagram() {
  const phoneElementsRef = useRef<Record<number, SVGElement[]>>(
    UEDistributionData.map(x => x.distance).reduce((acc, curr) => {
      acc[curr] = []
      return acc
    }, {}),
  )
  const dataLine = useRef<HTMLSpanElement>(null)

  const [frequencyBand, setFrequencyBand] = useState<typeof AvailableFrequencies[number]>(AvailableFrequencies[0])

  const ueCountInRange = UEDistributionData.filter(x => x.distance <= frequencyBand.coverageSize)
    .map(x => x.count)
    .reduce((acc, curr) => acc + curr, 0)
  const ueResourceBlocks = RESOURCE_BLOCKS / ueCountInRange
  const ueMaxThroughput = ueResourceBlocks * 12 * 15_000 * 8

  const classes = useStyles()
  const smallScreen = useMediaQuery(Breakpoints.upTo.tablet)
  const [targetRef, isVisible] = useVisible<HTMLDivElement>()

  React.useEffect(() => {
    const ueElementsInRange = Object.keys(phoneElementsRef.current)
      .filter(dist => parseInt(dist) <= frequencyBand.coverageSize)
      .map(dist => phoneElementsRef.current[parseInt(dist)])
      .flat()

    // const ueElementsNotInRange = Object.keys(phoneElementsRef)
    //   .filter(dist => parseInt(dist) > frequencyBand.coverageSize)
    //   .map(dist => phoneElementsRef[parseInt(dist)] as HTMLImageElement[])
    //   .flat()

    let lastRandom = -1

    const randomInRangeUe = () => {
      let newRandom: number
      do {
        if (ueElementsInRange.length === 0) {
          newRandom = -2
          break
        }

        newRandom = Math.floor(Math.random() * ueElementsInRange.length)
      } while (newRandom === lastRandom)

      if (newRandom >= 0) lastRandom = newRandom

      return newRandom >= 0 ? ueElementsInRange[newRandom] : null
    }

    Object.values(phoneElementsRef.current)
      .flat()
      .forEach(el => {
        el?.classList?.remove('transcieving')
      })

    const abortController = new AbortController()
    let timeoutKey = -1
    let lastUe = null

    const begin = () => {
      const randomUe = randomInRangeUe()

      if (randomUe) {
        randomUe.classList.add('transcieving')
        lastUe?.classList?.remove?.('transcieving')

        dataLine.current?.style.setProperty('--this', `${randomUe.dataset.this}`)
        dataLine.current?.style.setProperty('--distance', `${randomUe.dataset.distance}`)
        dataLine.current?.style.setProperty('--total', `${randomUe.dataset.total}`)
      }

      lastUe = randomUe

      if (!abortController.signal.aborted && isVisible) {
        timeoutKey = setTimeout(() => begin(), 300)
      }
    }

    if (!smallScreen && isVisible) begin()

    return () => {
      abortController.abort()
      clearTimeout(timeoutKey)
    }
  }, [isVisible, frequencyBand, smallScreen])

  return (
    <figure className={classes.root}>
      <figcaption className="text-loud text-center">eNB coverage diagram</figcaption>

      <div className={classes.container}>
        <div className={classes.controls}>
          <label htmlFor="sine-freq-input">Band selection</label>
          <input
            id="sine-freq-input"
            type="range"
            min={0}
            step={1}
            max={AvailableFrequencies.length - 1}
            value={AvailableFrequencies.findIndex(band => band.name === frequencyBand.name)}
            onChange={e => setFrequencyBand(AvailableFrequencies[e.target.value as any as number])}
          />
        </div>

        <div className={classes.data}>
          <p>
            <strong>Band:</strong> {frequencyBand.name} &ndash; {frequencyBand.frequency} Hz @ {BANDWIDTH} MHz BW
          </p>
          <p>
            <strong>Avg RBs per UE:</strong> {ueResourceBlocks.toFixed(2)} RBs
          </p>
          <p>
            <strong>Throughput per UE:</strong> {(ueMaxThroughput / 1_000_000).toFixed(2)} Mbps
          </p>
        </div>
      </div>

      {!smallScreen && (
        <>
          <section
            ref={targetRef}
            aria-hidden="true"
            role="presentation"
            className={classes.diagramContainer}
            style={{ '--coverage-size': frequencyBand.coverageSize }}
          >
            <div className={classes.coverageCircle} />

            {/* Data transfer line */}
            <span ref={dataLine} className={classes.dataTransfer} />

            {/* eNB */}
            <MastIcon className={classes.mast} />

            {/* UEs */}
            {UEDistributionData.map(({ distance, count }, ringNum) => {
              return Array.from({ length: count }, (_, i) => (
                <span
                  className={classes.ue}
                  key={`${distance}-${i}`}
                  data-total={count}
                  data-this={i}
                  data-distance={distance}
                  style={{
                    '--total': count,
                    '--this': i,
                    '--distance': distance,
                  }}
                  ref={element => (phoneElementsRef.current[distance][i] = element)}
                >
                  <PhoneIcon />
                </span>
              ))
            }).flat()}
          </section>

          <footer className={clsx(classes.footer, 'softer-bg')}>
            <p className="text-whisper-up">
              This is not to scale in any way, and is only used to demonstrate an idea, rather than provide concrete comparisons.
            </p>
            <p className="text-whisper-up">
              Throughput is theoretical, calculated with 256 QAM and 1x1{' '}
              <abbr data-tooltip aria-label="Single-input, single-output">
                SiSo
              </abbr>
              .
            </p>
          </footer>
        </>
      )}

      {smallScreen && (
        <FactBox title="Uh oh">
          <p>This demo only works on larger devices. Try viewing this page in landscape, or on a tablet, laptop or PC.</p>
        </FactBox>
      )}
    </figure>
  )
}
