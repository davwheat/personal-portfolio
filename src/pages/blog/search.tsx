import React, { useEffect, useMemo, useState } from 'react'
import { graphql, PageProps } from 'gatsby'

import Link from '@components/Links/Link'
import Layout from '@components/Layout'
import Hero from '@components/Design/Hero'
import Section from '@components/Design/Section'
import TextBox from '@components/Inputs/TextBox'

import Colors from '@data/colors.json'

import { makeStyles } from '@material-ui/styles'
import Breakpoints from '@data/breakpoints'
import generateTransitions from '@functions/generateTransitions'

import fuse from 'fuse.js'
import clsx from 'clsx'

interface ISearchResultDocument {
  id: string
  title: string
  tags: string[]
  description: string
}

interface ISearchState {
  results: ISearchResultDocument[]
  query: string
}

interface IBlogSearchData {
  fuseSearchIndex: {
    fuse: {
      index: any
      documents: ISearchResultDocument[]
    }
  }
}

const useStyles = makeStyles({
  list: {
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 24,

    [Breakpoints.between.desktopSmall.and.phone]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [Breakpoints.upTo.tablet]: {
      gridTemplateColumns: '1fr',
      gap: 16,
    },
  },
  resultCount: {
    marginBottom: 24,
  },
})

export default function BlogSearch({ data, location }: PageProps<IBlogSearchData>) {
  const { fuseSearchIndex } = data
  const classes = useStyles()

  const fuseSearcher = useMemo(() => {
    const idx = fuse.parseIndex<ISearchResultDocument>(fuseSearchIndex.fuse.index)

    return new fuse<ISearchResultDocument>(
      fuseSearchIndex.fuse.documents,
      {
        keys: [
          {
            name: 'title',
            weight: 3,
          },
          {
            name: 'searchKeywords',
            weight: 4,
          },
        ],
        ignoreLocation: true,
        threshold: 0.4,
      },
      idx,
    )
  }, [fuseSearchIndex])

  const [searchState, setSearchState] = useState<ISearchState>({
    query: '',
    results: [],
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search.substring(1))

    setSearchState(v => ({ ...v, query: params.get('q') || v.query }))
  }, [location])

  useEffect(() => {
    if (searchState.query.trim()) {
      const paramResults = fuseSearcher.search(searchState.query.trim()).map(i => i.item)
      setSearchState(v => ({ ...v, results: paramResults }))
    } else {
      setSearchState(v => ({ ...v, results: [] }))
    }
  }, [searchState.query, fuseSearcher])

  const { query, results } = searchState

  return (
    <Layout location={location} title="Search blog" description="Search blog articles from David Wheatley.">
      <Hero firstElement color={Colors.primaryBlue}>
        <h1 className="text-shout">Search blog</h1>
      </Hero>

      <Section darker usePadding>
        <TextBox type="search" label="Search" placeholder="Start typing..." onInput={query => setSearchState(v => ({ ...v, query }))} />
      </Section>

      <Section width="wider">
        <p className={clsx('text-speak-up', classes.resultCount)}>
          {results.length} {results.length !== 1 ? 'results' : 'result'} found
        </p>

        {query.trim() === '' && <p className="text-center text-loud">Please enter a search query.</p>}

        <ul className={classes.list}>
          {results.map(result => (
            <ResultItem key={result.id} title={result.title} path={`/blog/${result.path}`} />
          ))}
        </ul>
      </Section>
    </Layout>
  )
}

const useLinkItemStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  linkItem: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: '10px 18px',
    paddingRight: 20,
    border: '1px solid currentColor',
    borderRadius: 0,
    gap: 8,
    transformOrigin: 'center',
    '&::after': {
      content: '""',
      display: 'block',
      width: '0.75em',
      height: '0.75em',
      minWidth: '0.75em',
      minHeight: '0.75em',
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
    '& span': {
      flexGrow: 1,
      marginRight: 4,
    },
  },
})

function ResultItem({ title, path }) {
  const classes = useLinkItemStyles()

  return (
    <li className={classes.root}>
      <Link href={path} className={classes.linkItem}>
        <span>{title}</span>
      </Link>
    </li>
  )
}

export const query = graphql`
  {
    fuseSearchIndex: siteSearchIndex {
      fuse
    }
  }
`
