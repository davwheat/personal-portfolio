import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Design/Hero'

import Colors from '../data/colors.json'
import Section from '../components/Design/Section'
import Tech from '../components/PageComponents/Tech'
import Link from '../components/Links/Link'
import { makeStyles } from '@material-ui/styles'
import Breakpoints from '../data/breakpoints'
import generateTransitions from '../functions/generateTransitions'

const useStyles = makeStyles({
  projectsHeroOuter: {
    marginTop: 8,
    marginBottom: 8,
    '&::after, &::before': {
      content: '""',
      display: 'block',
      background: Colors.primaryRed,
      height: 8,
      width: '100%',
    },
    '&::before': {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
    },
    '&::after': {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)',
    },
  },
  projectsHero: {
    display: 'grid',
    gap: 16,
    [Breakpoints.downTo.tablet]: {
      alignItems: 'center',
      gridTemplateColumns: '1fr auto',
    },
    [Breakpoints.upTo.tablet]: {
      justifyItems: 'center',
      gridTemplateColumns: '1fr',
      textAlign: 'center',
    },
  },
  projectsLinkContainer: {},
  projectsLink: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 18px',
    paddingRight: 20,
    border: '1px solid currentColor',
    borderRadius: 0,
    gap: 8,
    transformOrigin: 'center',
    '&::after': {
      content: '""',
      display: 'inline-block',
      width: '0.75em',
      height: '0.75em',
      borderTop: '2px solid currentColor',
      borderRight: '2px solid currentColor',
      transform: 'rotate(45deg)',
      ...generateTransitions('transform'),
    },
    '&:hover, &:focus, &:active': {
      '&::after': {
        transform: 'translateX(3px) scaleY(0.92) scaleX(1.05) rotate(45deg)',
      },
    },
  },
})

const MyProjectsPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Layout title="My projects">
      <Hero firstElement size="huge" color={Colors.primaryRed}>
        <h1 className="text-louder">My projects</h1>
        <p role="doc-subtitle" className="text-loud">
          Take a peek at my favourite projects that I've worked on over the past few years.
        </p>
      </Hero>

      <Section>
        <h2 className="text-louder">Hello!</h2>
        <p className="text-speak">
          Usually, people's portfolio websites are super fancy, well-crafted, but also bloated and heavy. Not mine. This site is statically
          generated from fully-fledged React into simple, performant, and powerful HTML, CSS and Javascript with Gatsby.js.
        </p>
        <p className="text-speak">
          I prefer <strong>simple websites</strong>. Websites which are responsive and perform well on all devices, no matter how old and slow.
          Websites are for everyone, so everyone should be able to use them, no matter their device or internet&nbsp;connection.
        </p>
      </Section>
    </Layout>
  )
}

export default MyProjectsPage
