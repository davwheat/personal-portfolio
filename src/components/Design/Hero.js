import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles/Hero.module.css'
import clsx from 'clsx'

import bestContrast from 'get-best-contrast-color'

export default function Hero({ children, color, size, firstElement }) {
  return (
    <section
      className={clsx(
        styles.hero,
        [firstElement && styles.firstElement],
        [size === 'small' && styles.heroSmall],
        [size === 'normal' && styles.heroNormal],
        [size === 'large' && styles.heroLarge],
        [size === 'huge' && styles.heroHuge]
      )}
      style={{ backgroundColor: color, color: bestContrast(color, ['#000', '#fff']) }}
    >
      <div className={styles.heroInner}>{children}</div>
    </section>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large', 'huge']),
  firstElement: PropTypes.bool,
}

Hero.defaultProps = {
  color: '#000',
  size: 'normal',
  firstElement: false,
}
