import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../data/breakpoints'
import Colors from '../../data/colors.json'

const useStyles = makeStyles({
  pageSection: {
    marginTop: 24,
    marginBottom: 24,
    [Breakpoints.downTo.desktopSmall]: {
      marginTop: 48,
      marginBottom: 48,
    },
  },
  pad: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 24,
    paddingBottom: 24,
    [Breakpoints.downTo.desktopSmall]: {
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 48,
      paddingBottom: 48,
    },
  },
  fullWidth: {
    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%',
  },
  fullWidthInner: {
    padding: '0 8px',
  },
  wider: {
    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%',
  },
  widerInner: {
    maxWidth: 960,
    margin: 'auto',
    paddingLeft: 24,
    paddingRight: 24,
  },
  darkBg: {
    background: Colors.lightGrey,
    paddingTop: 36,
    paddingBottom: 36,

    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%',

    '& > div': {
      maxWidth: 720,
      margin: 'auto',
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
})

interface Props {
  usePadding?: boolean
  width?: 'normal' | 'wider' | 'full'
  darker?: boolean
}

const Section: React.FC<Props> = ({ children, usePadding, width = 'normal', darker = false, ...props }) => {
  const classes = useStyles()

  return (
    <section
      {...props}
      className={clsx(classes.pageSection, [
        usePadding && classes.pad,
        width === 'full' && classes.fullWidth,
        width === 'wider' && classes.wider,
        darker && classes.darkBg,
      ])}
    >
      <div
        className={clsx({
          [classes.fullWidthInner]: width === 'full',
          [classes.widerInner]: width === 'wider',
        })}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
