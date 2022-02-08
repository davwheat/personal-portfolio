import React from 'react'

import { graphql } from 'gatsby'

import type { LocationContext } from '@gatsbyjs/reach-router'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import { BlogHero } from '@components/BlogComponents/BlogHero'
import Section from '@components/Design/Section'

import Layout from '@components/Layout'
import Link from '@components/Links/Link'
import { MdxHeadingInterop } from '@components/BlogComponents/Typography/MdxHeadingInterop'
import { TableOfContents } from '@components/BlogComponents/TableOfContents'
import { BlogErrorBoundary } from '@components/BlogComponents/BlogErrorBoundary'
import { FactBox, MathBlock } from '@blog/index'

import TeX from '@matejmazur/react-katex'

import 'katex/dist/katex.min.css'
import '@styles/blog.less'

const MdxShortcodes: MDXProviderComponentsProp = {
  a: Link,
  h1: MdxHeadingInterop('h1'),
  h2: MdxHeadingInterop('h2'),
  h3: MdxHeadingInterop('h3'),
  h4: MdxHeadingInterop('h4'),
  h5: MdxHeadingInterop('h5'),
  h6: MdxHeadingInterop('h6'),
  img: props => <img draggable="false" {...props} loading="lazy" />,
  TableOfContents,
  div: props => {
    if (props.className?.includes?.('math-display')) {
      return <MathBlock {...props} />
    }

    return <div {...props} />
  },
  span: props => {
    if (props.className?.includes?.('math-inline')) {
      const { children, ...others } = props
      return <TeX math={children} {...others} />
    }

    return <span {...props} />
  },
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
    updated_at?: string
    /**
     * Is the post archived (hidden from the article list).
     */
    archived: boolean
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
  pageContext: { id: string; page: number }
  data: { mdx: IMdxPageContext & { page: number } }
  location: LocationContext
}

const useStyles = makeStyles({
  footerPara: {
    marginBottom: 32,
  },
  bottomNav: {
    marginTop: -16,
    marginBottom: 24,
  },
})

export default function DocsPageTemplate({ pageContext, location, data: { mdx: data } }: IDocsPageTemplateProps) {
  const { body, ...contextNoBody } = data
  const classes = useStyles()

  contextNoBody.frontmatter.updated_at ||= contextNoBody.frontmatter.created_at
  contextNoBody.frontmatter.archived ||= false

  return (
    <Layout
      location={location}
      title={contextNoBody.frontmatter.title}
      description={contextNoBody.frontmatter.description || contextNoBody.excerpt}
    >
      <article id="blog-article">
        <BlogErrorBoundary>
          <BlogHero pageContext={contextNoBody} />

          <Section>
            <Link href={`/blog/${pageContext.page}`}>Back to article list</Link>
          </Section>

          <hr />

          <Section id="blog-article-content">
            <BlogErrorBoundary>
              {contextNoBody.frontmatter.archived && (
                <FactBox title="Archived">
                  This article has been archived. Information contained within it may be out-of-date or wholly incorrect. This article has been
                  retained purely for historical and archival purposes only.
                </FactBox>
              )}

              <MDXProvider components={MdxShortcodes}>
                <MDXRenderer pageContext={contextNoBody}>{body}</MDXRenderer>
              </MDXProvider>
            </BlogErrorBoundary>
          </Section>

          <hr />

          <Section component="footer">
            <p className={clsx('text-speak text-center', classes.footerPara)}>
              Noticed something not quite right with this blog article? Give me a poke at{' '}
              <Link href={`mailto:blog@davwheat.dev?subject=${encodeURIComponent(contextNoBody.frontmatter.title)}`}>blog@davwheat.dev</Link> or{' '}
              <Link href="https://t.me/davwheat">t.me/davwheat</Link> and let me know.
            </p>
          </Section>

          <nav className={classes.bottomNav}>
            <Link href={`/blog/${pageContext.page}`}>Back to article list</Link>
          </nav>
        </BlogErrorBoundary>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query MdxBlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        path
        redirect_from
        created_at(formatString: "LLL", locale: "en-GB")
        updated_at(formatString: "LLL", locale: "en-GB")
        archived
      }

      id
      body
      tableOfContents(maxDepth: 3)
      excerpt
      timeToRead

      wordCount {
        words
      }
    }
  }
`
