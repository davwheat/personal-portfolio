import React from 'react'

import Colors from '@data/colors.json'

import Section from '@components/Design/Section'
import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'
import CardLink from '@components/MobileNetworking/CardLink'
import { makeStyles } from '@material-ui/styles'
import Breakpoints from '@data/breakpoints'
import Link from '@components/Links/Link'

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

const Links: ILinkGroup[] = [
  {
    groupName: 'Denmark',
    groupLinks: [
      {
        title: 'NR/EARFCN list',
        description: 'A list of Danish mobile network frequencies by their NRARFCNs and EARFCNs.',
        url: '/mobile-networking/dk/arfcn-list',
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
      title="Global mobile networks"
      description="Non-UK mobile networking tools and datasets maintained as part of my hobby."
    >
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">Global mobile networks</h1>
        <p role="doc-subtitle" className="text-loud">
          Non-UK mobile networking tools and datasets maintained as part of my hobby.
        </p>
      </Hero>

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
