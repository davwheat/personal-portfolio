import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import TeX from '@matejmazur/react-katex'
import Colors from '@data/colors.json'

interface IMathBlockProps {
  title?: string
  math: string
  footer?: string
}

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  title: {
    fontWeight: 'bold',
    padding: '8px 16px',
    background: Colors.primaryBlue,
  },
  mathBlock: {
    background: Colors.lightGrey,
    padding: 8,
    overflowX: 'auto',
  },
  warning: {
    display: 'flex',
    padding: 4,
    '& > p': {
      marginBottom: '0 !important',
    },
  },
  warningIcon: {
    width: '1.25em',
    display: 'inline-block',
    marginRight: 8,
    marginBottom: -1,
  },

  footer: {
    borderTop: `2px solid ${Colors.neutralGrey}`,
    background: Colors.lightGrey,
    padding: '8px 16px',
    '& p': {
      marginBottom: '0 !important',
    },
  },
})

export function MathBlock({ title, math, footer }: IMathBlockProps) {
  const classes = useStyles()

  return (
    <figure className={classes.root}>
      {title && <figcaption className={classes.title}>{title}</figcaption>}

      <TeX className={classes.mathBlock} block math={math} />

      {footer && (
        <footer className={clsx(classes.footer, 'softer-bg')}>
          <p className="text-whisper-up">{footer}</p>
        </footer>
      )}
    </figure>
  )
}
