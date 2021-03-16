import React from 'react'

import { Link as GatsbyLink } from 'gatsby'

import * as styles from './styles/link.module.css'

import clsx from 'clsx'

export default function Link({ href, children, className, ...props }) {
  return (
    <GatsbyLink to={href} className={clsx(styles.link, className)} {...props}>
      {children}
    </GatsbyLink>
  )
}
