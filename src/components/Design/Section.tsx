import React from 'react'
import clsx from 'clsx'
import styles from './Section.module.scss'

export interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {
  usePadding?: boolean
  width?: 'normal' | 'wider' | 'full'
  darker?: boolean
  children: React.ReactNode
  component?: any
}

function Section({ children, usePadding, width = 'normal', darker = false, component = 'section', ...props }: ISectionProps) {
  const sectionClasses = clsx(styles.pageSection, [
    usePadding && styles.pad,
    width === 'full' && styles.fullWidth,
    width === 'wider' && styles.wider,
    darker && styles.darkBg,
  ])

  return React.createElement(component, {
    ...props,
    className: sectionClasses,
    children: (
      <div
        className={clsx({
          [styles.fullWidthInner]: width === 'full',
          [styles.widerInner]: width === 'wider',
        })}
      >
        {children}
      </div>
    ),
  })
}

export default Section
