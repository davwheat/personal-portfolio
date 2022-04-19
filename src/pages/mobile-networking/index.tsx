import React from 'react'

import Section from '@components/Design/Section'
import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'
import CardLink from '@components/MobileNetworking/CardLink'
import Link from '@components/Links/Link'

import Colors from '@data/colors.json'
import Breakpoints from '@data/breakpoints'

import { makeStyles } from '@material-ui/styles'

interface ILinkGroup {
  groupName: string
  groupDescription: string
  groupLinks: ILink[]
}

interface ILink {
  title: string
  description: string
  url: string
}

const Links: ILinkGroup[] = [
  {
    groupName: 'Datasets',
    groupDescription: 'A variety of mobile networking related datasets hosted by me.',
    groupLinks: [
      {
        title: 'NR/EARFCN list',
        description: 'A list of UK mobile network frequencies by their NRARFCNs and EARFCNs.',
        url: '/mobile-networking/uk/arfcn-list',
      },
      {
        title: 'Spectrum allocation',
        description: 'A visualisation of spectrum allocation for mobile networks within the UK.',
        url: '/mobile-networking/uk/spectrum',
      },
    ],
  },
]

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
  },
})

function MobileNetworkingPage({ location }) {
  const classes = useStyles()

  return (
    <Layout
      location={location}
      title="UK mobile networking"
      description="A collection of mobile networking tools and datasets maintained as part of my hobby."
    >
      <Hero firstElement size="huge" color={Colors.primaryRed}>
        <h1 className="text-shout">UK mobile networking</h1>
        <p role="doc-subtitle" className="text-loud">
          A collection of mobile networking tools and datasets maintained as part of my hobby.
        </p>
      </Hero>

      <Section darker usePadding>
        <h2 className="text-louder">Other countries</h2>
        <p className="text-speak">
          This page only has info about the UK. If you're interested in mobile networks outside the UK,{' '}
          <Link href="/mobile-networking/other-countries">check out my info about other countries</Link>.
        </p>
      </Section>

      {Links.map((group, i) => (
        <Section key={i} darker={i % 2 === 0 ? false : true} width="wider">
          <h2 className="text-louder">{group.groupName}</h2>
          <p className="text-speak">{group.groupDescription}</p>

          <div className={classes.linkList}>
            {group.groupLinks.map(link => (
              <CardLink key={link.title} {...link} />
            ))}
          </div>
        </Section>
      ))}
    </Layout>
  )
}

export default MobileNetworkingPage
