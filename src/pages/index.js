import React from 'react'
import Layout from '../components/Templates/Layout/layout'
import Hero from '../components/Design/Hero'

import Colors from '../data/colors.json'
import Section from '../components/Design/Section'
import Tech from '../components/PageComponents/Tech'

const IndexPage = () => (
  <Layout title="Home">
    <Hero firstElement size="huge" color={Colors.primaryBlue}>
      <h1 className="text-loud">David Wheatley</h1>
      <h2 className="text-louder">A front-end web developer from West Sussex,&nbsp;UK</h2>
    </Hero>
    <Section>
      <p className="text-louder">Hello!</p>
      <p className="text-speak">
        Usually, people's portfolio websites are super fancy, well-crafted, but also bloated and heavy. Not mine. This site is statically
        generated from fully-fledged React into simple HTML, CSS and Javascript (aka it's fast) with Gatsby&nbsp;JS.
      </p>
      <p className="text-speak">
        I prefer <strong>simple websites</strong>. Websites which are responsive and perform well on all devices, no matter how old and slow.
        Websites are for everyone, so everyone should be able to use them, no matter their device or internet&nbsp;connection.
      </p>
    </Section>
    <Section>
      <p className="text-louder">What do I know?</p>
      <p className="text-speak" style={{ marginBottom: 64 }}>
        I've got experience with quite a lot of technologies, which is always handy. Over the years, I've experimented with lots of different
        frameworks and languages, both new and old, allowing me to quickly and easily adapt to new technologies when&nbsp;needed.
      </p>

      <Tech />
    </Section>
  </Layout>
)

export default IndexPage
