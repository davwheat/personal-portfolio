import React from 'react'
import Head from 'next/head'

type MetaEntry = {
  name: string
  content: string
}

interface Props {
  description?: string
  meta?: MetaEntry[]
  title: string
}

const DEFAULT_DESCRIPTION = 'David Wheatley is an front-end web designer specialising in React, located in West Sussex, UK.'
const SITE_TITLE = 'David Wheatley'
const SITE_URL = 'https://davwheat.dev'
const TWITTER_CREATOR = '@davwheat'

const SEO: React.FC<Props> = ({ description, meta, title }) => {
  const metaDescription = description || DEFAULT_DESCRIPTION
  const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={TWITTER_CREATOR} />
      <link rel="canonical" href={SITE_URL} />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Cloudflare Web Analytics */}
      <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "24bc94c5419241dcafa5223c7cd712e2"}' />

      {meta && meta.map((m, i) => <meta key={`${m.name}--${i}`} name={m.name} content={m.content} />)}
    </Head>
  )
}

export default SEO
