import React from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/Layout'
import Hero from '@components/Design/Hero'

import HeroColorVariant from '@data/colors'
import Section from '@components/Design/Section'
import Link from '@components/Links/Link'
import ButtonLink from '@components/Links/ButtonLink'

const Links = [
  { text: 'Home Page', url: '/' },
  { text: 'My projects', url: '/my-projects' },
  { text: 'Networking', url: 'https://mastdatabase.co.uk' },
  { text: 'Blog', url: 'https://mastdatabase.co.uk/blog' },
]

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <Layout title="Not Found" description="This page couldn't be found on my site.">
      <Hero firstElement color={HeroColorVariant.Primary}>
        <h1 className="text-shout">Lost?</h1>
        <p role="doc-subtitle" className="text-loud">
          Error 404 - This page doesn't exist
        </p>
      </Hero>
      <Section>
        <p className="text-speak">It looks like you've stumbled across a link to a page that doesn't exist.</p>
        <p className="text-speak">
          Try one of these pages, or <ButtonLink onClick={() => router.back()}>go back</ButtonLink>.
        </p>
        <nav>
          <ul className="list">
            {Links.map(link => (
              <li key={`${link.url}--${link.text}`}>
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Section>
    </Layout>
  )
}

export default NotFoundPage
