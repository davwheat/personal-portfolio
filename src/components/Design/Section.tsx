import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import Breakpoints from '../../data/breakpoints'

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
})

export default function Section({ children, usePadding, ...props }) {
  const classes = useStyles()

  return (
    <section {...props} className={clsx(classes.pageSection, [usePadding && classes.pad])}>
      {children}
    </section>
  )
}
