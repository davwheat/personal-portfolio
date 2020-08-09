import React from 'react'

import Layout from '../components/Templates/Layout/layout'
import Hero from '../components/Design/Hero'

import Colors from '../data/colors.json'
import Section from '../components/Design/Section'
import Link from '../components/Links/Link'

const Links = [
  { text: 'Home Page', url: '/' },
  { text: 'Blog', url: '/blog' },
]

const NotFoundPage = () => (
  <Layout title="Not Found">
    <Hero firstElement color={Colors.primaryBlue}>
      <h1 className="text-megaphone">Lost?</h1>
      <p className="text-loud">This page doesn't exist</p>
    </Hero>
    <Section>
      <p className="text-speak">It looks like you've stumbled across a link to a page that doesn't exist.</p>
      <p className="text-speak">
        Try one of these pages, or <a href="javascript:history.back()">go back</a>.
      </p>
      <nav>
        <ul className="list">
          {Links.map(link => (
            <li>
              <Link to={link.url} key={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  </Layout>
)

export default NotFoundPage
