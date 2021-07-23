import React, { useRef, useState } from 'react'

import { Canvas } from '@components/Canvas'
import Breakpoints from '@data/breakpoints'

import { makeStyles, useMediaQuery } from '@material-ui/core'
import TrackVisibility from 'react-on-screen'

export default function SineWaveSimulator() {
  const step = useRef(0)

  const [frequency, setFrequency] = useState(2)
  const [amplitude, setAmplitude] = useState(40)

  function showAxes(context: CanvasRenderingContext2D) {
    const width = context.canvas.width
    const height = context.canvas.height
    const xMin = 0

    context.beginPath()
    context.strokeStyle = 'rgb(128,128,128)'

    // X-Axis
    context.moveTo(xMin, height / 2)
    context.lineTo(width, height / 2)

    // Y-Axis
    context.moveTo(width / 2, 0)
    context.lineTo(width / 2, height)

    // Starting line
    context.stroke()
  }

  function drawCentrePoint(context: CanvasRenderingContext2D, x: number, y: number) {
    const height = context.canvas.height
    const radius = 3

    context.beginPath()
    context.lineWidth = 2
    context.strokeStyle = '#f00'
    context.moveTo(x, height / 2)
    context.lineTo(x, y)
    context.stroke()

    context.beginPath()
    context.arc(x, y, radius, 0, 2 * Math.PI, false)

    context.fillStyle = 'red'
    context.fill()
    context.lineWidth = 1
    context.stroke()
  }

  function plotSine(ctx: CanvasRenderingContext2D, xOffset: number) {
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = 'rgb(66,44,255)'

    let x = 0,
      y = 0

    const dotX = width / 2

    ctx.moveTo(0, getY(0, xOffset, height))

    while (x < width) {
      y = getY(x, xOffset, height)
      ctx.lineTo(x, y)
      x++
    }

    ctx.stroke()
    ctx.closePath()

    drawCentrePoint(ctx, dotX, getY(dotX, xOffset, height))

    ctx.stroke()
  }

  function draw(context: CanvasRenderingContext2D) {
    const width = context.canvas.width

    context.clearRect(0, 0, width, 150)
    showAxes(context)
    // context.save()

    plotSine(context, step.current)
    // context.restore()

    step.current += 1

    if (step.current > 360 / frequency) {
      step.current = 0
    }
  }

  function getY(x: number, offset: number, height: number) {
    return height / 2 + amplitude * Math.sin((Math.PI / 180) * (x + offset) * frequency)
  }

  const classes = useStyles()

  const isUnder750px = useMediaQuery('(max-width: 750px)')
  const isUnder650px = useMediaQuery('(max-width: 650px)')
  const isUnder500px = useMediaQuery('(max-width: 500px)')
  const isUnder400px = useMediaQuery('(max-width: 400px)')
  const isUnder375px = useMediaQuery('(max-width: 375px)')
  const isUnder300px = useMediaQuery('(max-width: 300px)')
  const isUnder200px = useMediaQuery('(max-width: 200px)')

  let canvasWidth = 650

  if (isUnder200px) canvasWidth = 75
  else if (isUnder300px) canvasWidth = 100
  else if (isUnder375px) canvasWidth = 220
  else if (isUnder400px) canvasWidth = 280
  else if (isUnder500px) canvasWidth = 300
  else if (isUnder650px) canvasWidth = 400
  else if (isUnder750px) canvasWidth = 550

  return (
    <figure className={classes.root}>
      <figcaption className="text-loud text-center">Sine wave simulator</figcaption>

      <div className={classes.container}>
        <div className={classes.controls}>
          <label htmlFor="sine-freq-input">Frequency</label>
          <input
            id="sine-freq-input"
            type="range"
            min={1}
            step={0.01}
            max={15}
            value={frequency}
            onChange={e => setFrequency(e.target.value as any as number)}
          />

          <label htmlFor="sine-amp-input">Amplitude</label>
          <input
            id="sine-amp-input"
            type="range"
            min={5}
            max={65}
            value={amplitude}
            onChange={e => setAmplitude(e.target.value as any as number)}
          />
        </div>

        <div className={classes.data}>
          <p>
            <strong>Frequency:</strong> {frequency * 1000} Hz
          </p>
          {/* Light in air: 299702547 m/s */}
          <p>
            <strong>Wavelength:</strong> {(299_702_547 / (frequency * 1000) / 1_000).toFixed(0)} km
          </p>
          <p>
            <strong>Amplitude:</strong> {amplitude} m
          </p>
        </div>
      </div>

      <div className={classes.canvas}>
        <TrackVisibility offset={300} partialVisibility>
          {({ isVisible }) => <Canvas width={`${canvasWidth}`} height="150" draw={isVisible ? draw : () => {}} />}
        </TrackVisibility>
      </div>
    </figure>
  )
}

const useStyles = makeStyles({
  root: {
    border: '2px solid #000',
    padding: 16,
  },
  canvas: {
    marginTop: 24,
    margin: 'auto',
    width: 'max-content',
  },
  container: {
    marginTop: 12,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    gap: 16,
    [Breakpoints.upTo.tablet]: {
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
})
