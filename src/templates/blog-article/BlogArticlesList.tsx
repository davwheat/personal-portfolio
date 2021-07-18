import React from 'react'
import { graphql } from 'gatsby'

import { BlogCard } from '@components/BlogComponents/BlogCard'
import PageNavigator from '@components/BlogComponents/PageNavigator'
import Layout from '@components/Layout'
import Hero from '@components/Design/Hero'
import Section from '@components/Design/Section'

import Colors from '@data/colors.json'

import type { LocationContext } from '@gatsbyjs/reach-router'
import type { IMdxPageContextWithoutBody } from '@templates/blog-article/BlogPageTemplate'
import { makeStyles } from '@material-ui/styles'
import Breakpoints from '@data/breakpoints'

interface IBlogArticlesListProps {
  location: LocationContext
  data: {
    allMdx: {
      nodes: (IMdxPageContextWithoutBody & {
        frontmatter: { path: string }
        id: string
      })[]
    }
  }
  pageContext: {
    numPages: number
    currentPage: number
  }
}

const useStyles = makeStyles({
  list: {
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,

    [Breakpoints.between.desktopSmall.and.phone]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [Breakpoints.upTo.tablet]: {
      gridTemplateColumns: '1fr',
    },
  },
})

export default function BlogArticlesList({
  location,
  data: {
    allMdx: { nodes },
  },
  pageContext: { numPages, currentPage },
}: IBlogArticlesListProps) {
  const classes = useStyles()

  const Posts = nodes.map(node => (
    <BlogCard
      key={node.id}
      title={node.frontmatter.title}
      description={node.frontmatter.description || node.excerpt}
      date={node.frontmatter.created_at}
      slug={`/blog/${node.frontmatter.path}`}
    />
  ))

  return (
    <Layout location={location} title={`Blog | Page ${currentPage}`} description={`Page ${currentPage} of blog articles from David Wheatley.`}>
      <Hero firstElement color={Colors.primaryBlue}>
        <h1 className="text-shout">Blog articles</h1>
        <p role="doc-subtitle" className="text-loud">
          Page {currentPage} of {numPages}
        </p>
      </Hero>

      <Section>
        <ul className={classes.list}>{Posts}</ul>
      </Section>

      <Section>
        <PageNavigator currentPage={currentPage} maxPage={numPages} />
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(sort: { order: DESC, fields: [frontmatter___created_at] }, limit: $limit, skip: $skip) {
      nodes {
        frontmatter {
          title
          description
          path
          created_at(formatString: "YYYY-MM-DD")
        }

        id
        excerpt
      }
    }
  }
`
