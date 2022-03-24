import React from 'react'

import Colors from '@data/colors.json'

import Section from '@components/Design/Section'
import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'
import CardLink from '@components/MobileNetworking/CardLink'
import { makeStyles } from '@material-ui/styles'
import Breakpoints from '@data/breakpoints'

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
        title: 'NR/E/U/ARFCN list',
        description: 'A list of UK mobile network frequencies by their NRARFCN, EARFCN, UARFCN and ARFCNs.',
        url: '/mobile-networking/uk/arfcn-list',
      },
    ],
  },
]

const useStyles = makeStyles({
  linkList: {
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--columns), minmax(0, 1fr))',
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
      title="Mobile networks"
      description="A collection of mobile networking tools and datasets maintained as part of my hobby."
    >
      <Hero firstElement size="huge" color={Colors.primaryRed}>
        <h1 className="text-shout">Mobile networks</h1>
        <p role="doc-subtitle" className="text-loud">
          A collection of mobile networking tools and datasets maintained as part of my hobby.
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
