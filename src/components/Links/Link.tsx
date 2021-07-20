import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
  link: {
    color: 'var(--link-color)',
    fontWeight: 700,
    textDecoration: 'underline',
  },
})

export interface ILinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

function isExternalLink(url: string): boolean {
  const regex = /^https?:\/\//

  return !!url.match(regex)
}

const Link = ({ href, children, className, ...props }: ILinkProps) => {
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
