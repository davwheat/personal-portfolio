import PropTypes from 'prop-types'
import React from 'react'

import Link from '../../Links/Link'

import styles from './styles/header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerInnerContainer}>
      <Link href="/" className={styles.name}>
        David Wheatley
      </Link>
      <nav className={styles.nav}>
        <Link href="/blog">Blog</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
