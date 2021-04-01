import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { makeStyles } from '@material-ui/core'
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

function isExternalLink(url: string): boolean {
  const regex = /^https?:\/\//

  return !!url.match(regex)
}

const Link: React.FC<Props> = ({ href, children, className, ...props }) => {
  const classes = useStyles()

  const linkProps = {
    className: clsx(classes.link, className),
    ...props,
  }

  if (isExternalLink(href)) {
    return (
      <a href={href} {...linkProps}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={href} {...linkProps}>
      {children}
    </GatsbyLink>
  )
}

export default Link
