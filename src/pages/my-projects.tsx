import React from 'react'

import HeroColorVariant from '@data/colors'

import Section from '@components/Design/Section'
import ProjectList from '@components/Projects/ProjectList'
import Layout from '@components/Layout'
import Hero from '@components/Design/Hero'

const MyProjectsPage = () => {
  return (
    <Layout title="My projects" description="Take a peek at my favourite projects that I've worked on over the past few years.">
      <Hero firstElement size="huge" color={HeroColorVariant.Secondary}>
        <h1 className="text-shout">My projects</h1>
        <p role="doc-subtitle" className="text-loud">
          Take a peek at my favourite projects that I've worked on over the past few years.
        </p>
      </Hero>

      <Section width="wider">
        <ProjectList />
      </Section>
    </Layout>
  )
}

export default MyProjectsPage
