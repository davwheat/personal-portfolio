import React from 'react'

import Header from './Header'
import Footer from './PageComponents/Footer'
import SEO from './SEO'

import { makeStyles, ThemeProvider } from '@material-ui/styles'
import theme from '../theme'

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
    <ThemeProvider theme={theme}>
      <SEO title={title} />
      <Header />
      <main className={classes.mainContent}>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
