import React from 'react'

import { makeStyles } from '@material-ui/styles'

import Link from '@components/Links/Link'
import generateTransitions from '@functions/generateTransitions'

import dayjs from 'dayjs'
import dayjsLocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(dayjsLocalizedFormat)

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: 16,
    border: '2px solid #000',
    ...generateTransitions('box-shadow', 'short'),
    '&:hover, &:focus-within': {
      boxShadow: '0 0 0 2px black',
    },
  },
  title: {
    '& a::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
})

export const BlogCard = ({ title, date, description, slug }) => {
  const classes = useStyles()

  return (
    <li className={classes.root}>
      <h2 className={classes.title}>
        <Link href={slug}>{title}</Link>
      </h2>

      <p>{dayjs(date).format('LL')}</p>
      <p>{description}</p>
    </li>
  )
}
