import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/header'
import Footer from '../Footer'

import SEO from '../../seo'

import './styles/layout.css'
import styles from './styles/layout.module.css'

import 'animate.css/animate.min.css'

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
