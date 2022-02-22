import React from 'react'

import Header from './PageComponents/Header'
import Footer from './PageComponents/Footer'
import SEO from './SEO'

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import theme from '../theme'

import type { LocationContext } from '@gatsbyjs/reach-router'
import { ScrollContext } from 'gatsby-react-router-scroll'

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
  description?: string
  location: LocationContext
}

const Layout: React.FC<Props> = ({ children, title, description, location }) => {
  const classes = useStyles()

  return (
    <ScrollContext location={location}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SEO title={title} description={description} />

          <Header />

          <main className={classes.mainContent}>{children}</main>

          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </ScrollContext>
  )
}

export default Layout
