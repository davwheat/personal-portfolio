import React from 'react'

import type { LocationContext } from '@gatsbyjs/reach-router'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { BlogHero } from '@components/BlogComponents/BlogHero'
import Section from '@components/Design/Section'

import Layout from '@components/Layout'
import Link from '@components/Links/Link'
import { MdxHeadingInterop } from '@components/BlogComponents/Typography/MdxHeadingInterop'
import { TableOfContents } from '@components/BlogComponents/TableOfContents'
import { BlogErrorBoundary } from '@components/BlogComponents/BlogErrorBoundary'

import '@styles/blog.less'

const MdxShortcodes: MDXProviderComponentsProp = {
  a: Link,
  h1: MdxHeadingInterop('h1'),
  h2: MdxHeadingInterop('h2'),
  h3: MdxHeadingInterop('h3'),
  h4: MdxHeadingInterop('h4'),
  h5: MdxHeadingInterop('h5'),
  h6: MdxHeadingInterop('h6'),
  img: props => <img {...props} loading="lazy" />,
  TableOfContents,
}

export interface IMdxPageContext {
  frontmatter: {
    /**
     * Blog article title, defined in frontmatter.
     */
    title: string
    /**
     * Blog article description, defined in frontmatter.
     */
    description: string
    /**
     * Date article was created at.
     */
    created_at: string
    /**
     * Date article was updated at.
     */
    updated_at: string
  }

  /**
   * A list of all headings in the document, down to a depth of H3.
   */
  tableOfContents: { items: TableOfContents }
  /**
   * An estimated time needed to read this article in minutes.
   */
  timeToRead: number
  /**
   * An excerpt from the markdown file, used for SEO.
   */
  excerpt: string
  /**
   * Post body content.
   */
  body: string
}

export type IMdxPageContextWithoutBody = Omit<IMdxPageContext, 'body'>

interface IDocsPageTemplateProps {
  pageContext: IMdxPageContext & { page: number }
  location: LocationContext
}

export default function DocsPageTemplate({ pageContext, location }: IDocsPageTemplateProps) {
  const { body, ...contextNoBody } = pageContext

  return (
    <Layout location={location} title={pageContext.frontmatter.title} description={pageContext.excerpt}>
      <article id="blog-article">
        <BlogErrorBoundary>
          <BlogHero pageContext={contextNoBody} />

          <Section>
            <Link href={`/blog/${pageContext.page}`}>Back to article list</Link>
          </Section>

          <hr />

          <Section id="blog-article-content">
            <BlogErrorBoundary>
              <MDXProvider components={MdxShortcodes}>
                <MDXRenderer pageContext={contextNoBody}>{body}</MDXRenderer>
              </MDXProvider>
            </BlogErrorBoundary>
          </Section>

          <hr />

          <Section>
            <p className="text-speak text-center">End of article</p>
            <Link href={`/blog/${pageContext.page}`}>Back to article list</Link>
          </Section>
        </BlogErrorBoundary>
      </article>
    </Layout>
  )
}
