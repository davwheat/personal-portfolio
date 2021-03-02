import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/header'
import Footer from '../Footer'

import SEO from '../../seo'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  mainContent: {
    maxWidth: 768,
    margin: 'auto',
    paddingLeft: 24,
    paddingRight: 24,
    flex: '1',
    width: '100%',
  },
})

const Layout = ({ children, title }) => {
  const classes = useStyles()

  return (
    <>
      <SEO title={title} />
      <Header />
      <main className={classes.mainContent}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
