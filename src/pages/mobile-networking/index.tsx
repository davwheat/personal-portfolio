import React from 'react'

import Section from '@components/Design/Section'
import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'
import CardLink from '@components/MobileNetworking/CardLink'
import Breadcrumbs from '@components/Design/Breadcrumbs'

import countryCodeToFlag from '@functions/countryCodeToFlag'

import Colors from '@data/colors.json'
import Breakpoints from '@data/breakpoints'

import { makeStyles } from '@material-ui/styles'

interface ILinkGroup {
  groupName: string
  groupDescription?: string
  groupLinks: ILink[]
}

interface ILink {
  title: string
  description: string
  url: string
}

const useStyles = makeStyles({
  linkList: {
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--columns), minmax(0, 1fr))',
    gap: 32,
    '--columns': 1,

    [Breakpoints.downTo.tablet]: {
      '--columns': 2,
    },

    '& img.emoji': {
      display: 'inline-block',
      height: '1em',
      width: 'auto',
      verticalAlign: '-0.1em',
    },
  },
})

function MobileNetworkingPage({ location }) {
  const classes = useStyles()

  return (
    <Layout
      location={location}
      title="Mobile networking"
      description="Tools, datasets and various resources I have collected for mobile networking around the globe."
    >
      <Hero firstElement size="huge" color={Colors.primaryRed}>
        <h1 className="text-shout">Mobile networking</h1>
        <p role="doc-subtitle" className="text-loud">
          Tools, datasets and various resources for mobile networking worldwide.
        </p>
      </Hero>

      <Breadcrumbs
        data={[
          { t: 'Home', url: '/' },
          { t: 'Mobile networking', url: '/mobile-networking' },
        ]}
      />

      <Section width="wider">
        <h2 className="text-louder">Countries</h2>
        <p className="text-speak">List of all countries which I have mobile networking related information and pages about on this website.</p>

        <div className={classes.linkList}>
          <CardLink title={<>{countryCodeToFlag('gb')} United Kingdom</>} description="United Kingdom" url="uk" />
          <CardLink title={<>{countryCodeToFlag('dk')} Denmark</>} description="Danmark" url="dk" />
          <CardLink title={<>{countryCodeToFlag('de')} Germany</>} description="Deutschland" url="de" />
        </div>
      </Section>
    </Layout>
  )
}

export default MobileNetworkingPage
