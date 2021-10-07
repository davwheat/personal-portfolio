import React from 'react'

export interface ITooltipProps {
  text: string
  children: React.ReactNode
}

export function Tooltip({ text = 'Interesting fact', children }: ITooltipProps) {
  return (
    <abbr data-tooltip tabIndex={0} aria-label={text}>
      {children}
    </abbr>
  )
}
