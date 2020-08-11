import React from 'react'
import clsx from 'clsx'

import styles from '../../styles/Section.module.css'

export default function Section({ children, usePadding, ...props }) {
  return (
    <section {...props} className={clsx(styles.pageSection, [usePadding && styles.pad])}>
      {children}
    </section>
  )
}
