import React from 'react'

import clsx from 'clsx'
import bestContrast from 'get-best-contrast-color'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  hero: {
    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%',
    background: '#000',
    color: '#fff',
    overflow: 'hidden',
  },
  heroInner: {
    width: '100%',
    margin: 'auto',
    maxWidth: 960,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 48,
    paddingBottom: 48,
    '& p, & h1, & h2, & h3, & h4, & h5, & h6': {
      marginBottom: '0.1em',
      '&:last-child': {
        margin: 0,
      },
    },
  },
  firstElement: {
    marginTop: -24,
  },
  heroSmall: {
    '& $heroInner': {
      paddingTop: 16,
      paddingBottom: 16,
      '@media (min-width: 768px)': {
        paddingTop: 24,
        paddingBottom: 24,
      },
    },
  },
  heroNormal: {
    '& $heroInner': {
      paddingTop: 24,
      paddingBottom: 24,
      '@media (min-width: 768px)': {
        paddingTop: 48,
        paddingBottom: 48,
      },
    },
  },
  heroLarge: {
    '& $heroInner': {
      paddingTop: 36,
      paddingBottom: 36,
      '@media (min-width: 768px)': {
        paddingTop: 56,
        paddingBottom: 56,
      },
    },
  },
  heroHuge: {
    '& $heroInner': {
      paddingTop: 48,
      paddingBottom: 48,
      '@media (min-width: 768px)': {
        paddingTop: 72,
        paddingBottom: 72,
      },
    },
  },
})

interface Props {
  color?: string
  size?: 'small' | 'normal' | 'large' | 'huge'
  firstElement?: boolean
  className?: string
  innerClassName?: string
}

const Hero: React.FC<Props> = ({ children, color = '#000', size = 'normal', firstElement = false, className, innerClassName }) => {
  const classes = useStyles()

  return (
    <section
      className={clsx(
        classes.hero,
        [firstElement && classes.firstElement],
        [size === 'small' && classes.heroSmall],
        [size === 'normal' && classes.heroNormal],
        [size === 'large' && classes.heroLarge],
        [size === 'huge' && classes.heroHuge],
        className,
      )}
      style={{ backgroundColor: color, color: bestContrast(color, ['#000', '#fff']) }}
    >
      <div className={clsx(classes.heroInner, innerClassName)}>{children}</div>
    </section>
  )
}

export default Hero
