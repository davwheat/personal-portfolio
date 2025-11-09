import React from 'react'
import Layout from '@components/Layout'
import Hero from '@components/Design/Hero'

import HeroColorVariant from '@data/colors'
import Section from '@components/Design/Section'
import Link from '@components/Links/Link'
import Experience from '@components/Experience/Experience'
import QualificationsTable from '@components/Education/QualificationsTable'
import styles from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout title="Home">
      <Hero firstElement size="huge" color={HeroColorVariant.Primary}>
        <h1 className="text-shout">David Wheatley</h1>
        <p role="doc-subtitle" className="text-loud">
          A front-end web developer from West Sussex,&nbsp;UK
        </p>
      </Hero>

      <Section>
        <h2 className="text-louder">Hello!</h2>
        <p className="text-speak">
          Usually, people's portfolio websites are super fancy, well-crafted, but also bloated and heavy. Not mine. This site is statically
          generated from fully-fledged React into simple, performant, and powerful HTML, CSS and Javascript with&nbsp;
          <a rel="noreferrer noopener" target="_blank" href="https://nextjs.org/">
            Next.js
          </a>
          .
        </p>
        <p className="text-speak">
          I prefer <strong>simple websites</strong>. Websites which are responsive and perform well on all devices, no matter how old and slow.
          Websites are for everyone, so everyone should be able to use them, no matter their device or internet&nbsp;connection.
        </p>
      </Section>

      <Hero innerClassName={styles.projectsHero} color={HeroColorVariant.Secondary}>
        <div>
          <h2 className="text-loud">Take a peek at some projects that I've worked on over the&nbsp;years.</h2>
        </div>
        <div className={styles.projectsLinkContainer}>
          <Link className={styles.projectsLink} href="/my-projects">
            My projects
          </Link>
        </div>
      </Hero>

      <Section>
        <h2 className="text-louder">Experience</h2>
        <p className="text-speak">          I've worked on several projects for multiple organisations, on top of contributing to the wider open source&nbsp;community.
        </p>

        <Experience />
      </Section>

      <Section darker>
        <h2 className="text-louder">What do I know?</h2>
        <p className="text-speak">
          Nowadays I focus primarily on Android app development using Kotlin and Jetpack Compose, but also take time to keep up to scratch on web
          development.
        </p>
        <p className="text-speak">
          I've also had the opportunity to create various new backend microservices and work on existing ones, typically developed using Go.
        </p>
      </Section>

      <Section>
        <h2 className="text-louder">Qualifications</h2>

        <p className="text-speak">
          I am currently on a level 6 degree apprenticeship with Raileasy and the University of Warwick, working towards a BSc Digital Technology
          Solutions (Software Engineering).
        </p>

        <p className="text-speak">I was awarded my UK A-levels and BTEC qualifications in 2021 and 2022.</p>

        <QualificationsTable className={styles.eduTable} />
      </Section>
    </Layout>
  )
}

export default IndexPage
