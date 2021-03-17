import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Design/Hero'

import Colors from '../data/colors.json'
import Section from '../components/Design/Section'
import Tech from '../components/PageComponents/Tech'

const IndexPage: React.FC = () => (
  <Layout title="Home">
    <Hero firstElement size="huge" color={Colors.primaryBlue}>
      <h1 className="text-louder">David Wheatley</h1>
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
      <h2 className="text-louder">What do I know?</h2>
      <p className="text-speak">
        I've got experience with quite a lot of technologies, which is always handy. Over the years, I've experimented with lots of different
        frameworks and languages, both new and old, allowing me to quickly and easily adapt to new technologies when&nbsp;needed.
      </p>

      <Tech />
    </Section>
    <Section>
      <h2 className="text-louder">Qualifications</h2>
      <p className="text-speak"></p>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BTEC L3 Computing</td>
            <td>
              D*<sup aria-label="predicted result">P</sup>
            </td>
          </tr>
          <tr>
            <td>A-level Computer Science</td>
            <td>
              A*<sup aria-label="predicted result">P</sup>
            </td>
          </tr>
          <tr>
            <td>A-level Maths</td>
            <td>
              B<sup aria-label="predicted result">P</sup>
            </td>
          </tr>
          <tr>
            <td>GCSE Computer Science</td>
            <td>9</td>
          </tr>
          <tr>
            <td>
              AQA <abbr title="Level 2">L2</abbr> Further Maths Certificate
            </td>
            <td>9</td>
          </tr>
          <tr>
            <td>GCSE English & Maths</td>
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

export default IndexPage
