import React from 'react'
import Layout from '../components/Templates/Layout/layout'
import Hero from '../components/Design/Hero'

import Colors from '../data/colors.json'
import Section from '../components/Design/Section'

const IndexPage = () => (
  <Layout title="Home">
    <Hero firstElement size="huge" color={Colors.primaryBlue}>
      <h1 className="text-loud">David Wheatley</h1>
      <h2 className="text-louder">A front-end web developer from West Sussex, UK</h2>
    </Hero>
    <Section>
      <p className="text-loud">Hello!</p>
      <p className="text-speak">
        Usually, people's portfolio websites are super fancy, well-crafted, but also bloated and heavy. Not mine. This site is statically
        generated from fully-fledged React into simple HTML, CSS and Javascript (aka it's fast) with Gatsby JS.
      </p>
      <p className="text-speak">
        I prefer <strong>simple websites</strong>. Websites which are responsive and perform well on all devices, no matter how old and slow.
        Websites are for everyone, so everyone should be able to use them, no matter their device or internet connection.
      </p>
    </Section>
  </Layout>
)

export default IndexPage
