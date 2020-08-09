import React from 'react'

import styles from '../../styles/Section.module.css'

export default function Section({ children, ...props }) {
  return (
    <section {...props} className={styles.pageSection}>
      {children}
    </section>
  )
}
