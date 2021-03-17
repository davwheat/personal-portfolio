import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import Colors from '../../data/colors.json'

const useStyles = makeStyles({
  link: {
    color: Colors.linkColor,
    fontWeight: 700,
    textDecoration: 'underline',
  },
})

interface Props {
  href: string
  className?: string
}

const Link: React.FC<Props> = ({ href, children, className, ...props }) => {
  const classes = useStyles()

  return (
    <GatsbyLink to={href} className={clsx(classes.link, className)} {...props}>
      {children}
    </GatsbyLink>
  )
}

export default Link
