import React from 'react'

import Section from '@components/Design/Section'
import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'
import CardLink from '@components/MobileNetworking/CardLink'

import Colors from '@data/colors.json'
import Breakpoints from '@data/breakpoints'

import { makeStyles } from '@material-ui/styles'
import Breadcrumbs from '@components/Design/Breadcrumbs'

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
    groupDescription: 'A variety of German mobile networking related datasets hosted by me.',
    groupLinks: [
      {
        title: 'NR/EARFCN list',
        description: 'A list of German mobile network frequencies by their NRARFCNs and EARFCNs.',
        url: '/mobile-networking/de/arfcn-list',
      },
      {
        title: 'Spectrum allocation',
        description: 'A visualisation of spectrum allocation for mobile networks within Germany.',
        url: '/mobile-networking/de/spectrum',
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
      title="Mobile networking in Germany"
      description="A collection of German mobile networking tools and datasets maintained as part of my hobby."
    >
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">Mobile networking in Germany</h1>
        <p role="doc-subtitle" className="text-loud">
          A collection of German mobile networking tools and datasets maintained as part of my hobby.
        </p>
      </Hero>

      <Breadcrumbs
        data={[
          { t: 'Home', url: '/' },
          { t: 'Mobile networking', url: '/mobile-networking' },
          { t: 'Germany', url: '/mobile-networking/de' },
        ]}
      />

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
