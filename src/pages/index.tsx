import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Design/Hero'

import Colors from '../data/colors.json'
import Section from '../components/Design/Section'
import Tech from '../components/PageComponents/Tech'
import Link from '../components/Links/Link'
import { makeStyles } from '@material-ui/core'
import Breakpoints from '../data/breakpoints'
import generateTransitions from '../functions/generateTransitions'
import Experience from '../components/Experience/Experience'

const useStyles = makeStyles({
  projectsHeroOuter: {
    marginTop: 8,
    marginBottom: 8,
    '&::after, &::before': {
      content: '""',
      display: 'block',
      background: 'var(--primary-red)',
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

const IndexPage: React.FC = () => {
  const classes = useStyles()

  return (
    <Layout title="Home">
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">David Wheatley</h1>
        <p role="doc-subtitle" className="text-loud">
          A front-end web developer from West Sussex,&nbsp;UK
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

      <Section>
        <h2 className="text-louder">Experience</h2>
        <p className="text-speak">
          I've worked on several for multiple different organisations, as well as contributing to the wider open source community.
        </p>

        <Experience />
      </Section>

      <Hero className={classes.projectsHeroOuter} innerClassName={classes.projectsHero} color={Colors.primaryRed}>
        <div>
          <h2 className="text-loud">Take a peek at some projects that I've worked on over the years.</h2>
        </div>
        <div className={classes.projectsLinkContainer}>
          <Link className={classes.projectsLink} href="/my-projects">
            My projects
          </Link>
        </div>
      </Hero>

      <Section>
        <h2 className="text-louder">What do I know?</h2>
        <p className="text-speak">
          I've got experience with quite a lot of technologies, which is always handy. Over the years, I've experimented with lots of different
          frameworks and languages, both new and old, allowing me to quickly and easily adapt to new technologies when&nbsp;needed.
        </p>

        <Tech />
      </Section>

      <Section>
        <h2 className="text-louder">Qualifications</h2>
        <p className="text-speak">
          As a student, I haven't received all of my qualifications at the moment, so some of the courses below show my predicted grades as
          opposed to my actual grades.
        </p>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A-level Computer Science</td>
              <td>
                A*<sup aria-label="predicted result">P</sup>
              </td>
            </tr>

            <tr>
              <td>A-level Maths</td>
              <td>
                A*<sup aria-label="predicted result">P</sup>
              </td>
            </tr>

            <tr>
              <td>
                <abbr title="A-level equivalent">BTEC L3</abbr> Computing
              </td>
              <td>
                <abbr title="Distinction star">D*</abbr>
                <sup aria-label="predicted result">P</sup>
              </td>
            </tr>

            <tr>
              <td>GCSE Computer Science</td>
              <td>9</td>
            </tr>

            <tr>
              <td>AQA L2 Further Maths Certificate</td>
              <td>9</td>
            </tr>

            <tr>
              <td>GCSE English &amp; Maths</td>
              <td>9</td>
            </tr>

            <tr>
              <td>GCSE Business</td>
              <td>9</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>P - predicted result (still studying)</td>
            </tr>
          </tfoot>
        </table>
      </Section>
    </Layout>
  )
}

export default IndexPage
