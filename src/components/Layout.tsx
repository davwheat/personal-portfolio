import React from 'react'

import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

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

interface Props {
  title: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
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

export default Layout
