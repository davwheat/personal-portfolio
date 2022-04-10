import React from 'react'

import { Chip, makeStyles } from '@material-ui/core'

import Link from '../Links/Link'

import clsx from 'clsx'
import generateTransitions from '@functions/generateTransitions'

interface Props {
  title: string
  description: string
  url: string
}

const CARD_PADDING = 16 as const

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: CARD_PADDING,
    position: 'relative',
  },

  header: {
    display: 'flex',
    gap: 8,
  },

  heading: {
    flexGrow: 1,
  },

  link: {
    textDecoration: 'none',
    display: 'flex',
    border: '2px solid black',
    outline: '0px solid black',

    '&:hover, &:focus, &:active': {
      outlineWidth: 2,
      '& $arrow': {
        '&::after': {
          transform: 'translateX(3px) scaleY(0.92) scaleX(1.05) rotate(45deg)',
        },
      },
    },
  },

  arrow: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 18px',
    paddingRight: 20,
    gap: 8,
    transformOrigin: 'center',
    '&::after': {
      content: '""',
      display: 'inline-block',
      width: '0.75em',
      height: '0.75em',
      borderTop: '2px solid currentColor',
      borderRight: '2px solid currentColor',
      transform: 'rotate(45deg)',
      ...generateTransitions('transform'),
    },
  },

  spring: {
    flexGrow: 1,
  },
})

function CardLink({ title, description, url }: Props) {
  const classes = useStyles()

  return (
    <Link className={classes.link} href={url}>
      <article className={classes.card}>
        <header className={classes.header}>
          <h3 className={clsx('text-loud', classes.heading)}>{title}</h3>
        </header>

        <div aria-hidden className={classes.spring} />

        <p className="text-speak">{description}</p>
      </article>
      <div aria-hidden="true" className={classes.arrow} />
    </Link>
  )
}

export default CardLink
