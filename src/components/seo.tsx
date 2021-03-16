/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Title, Meta } from 'react-head'
import { useStaticQuery, graphql } from 'gatsby'

type MetaEntry = {
  name: string
  content: string
}

interface Props {
  description?: string
  meta?: MetaEntry[]
  title: string
}

const SEO: React.FC<Props> = ({ description, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <Title>{title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}</Title>
      <Meta name="description">{metaDescription}</Meta>

      <Meta name="og:title">{title}</Meta>
      <Meta name="og:description">{metaDescription}</Meta>
      <Meta name="og:type">website</Meta>

      <Meta name="twitter:card">summary</Meta>
      <Meta name="twitter:title">{title}</Meta>
      <Meta name="twitter:description">{metaDescription}</Meta>
      <Meta name="twitter:creator">@davwheat</Meta>

      {meta.map((m, i) => (
        <Meta key={`${m.name}--${i}`} name={m.name}>
          {m.content}
        </Meta>
      ))}
    </>
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
