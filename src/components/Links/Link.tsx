import React from 'react'

import NextLink from 'next/link'

import clsx from 'clsx'
import styles from './Link.module.scss'

export interface ILinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  /**
   * If present, will force as internal/external. Otherwise will auto-detect.
   */
  internal?: boolean
}

function isExternalLink(url: string): boolean {
  const regex = /^(https?:\/\/|mailto:)/

  return !!url?.match(regex)
}

const Link = ({ href, children, className, internal, ...props }: ILinkProps) => {
  const linkProps = {
    className: clsx(styles.link, className),
    ...props,
  }

  if (internal === false || (internal !== true && isExternalLink(href))) {
    return (
      <a href={href} rel="noopener" {...linkProps}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} {...linkProps}>
      {children}
    </NextLink>
  )
}

export default Link
