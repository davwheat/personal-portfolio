import React, { useRef, useEffect } from 'react'

import TrackVisibility from 'react-on-screen'

interface ICanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {
  draw: (context: CanvasRenderingContext2D) => void
}

export const Canvas = ({ draw, ...props }: ICanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId: number

    const render = () => {
      draw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return <canvas ref={canvasRef} {...props} />
}
