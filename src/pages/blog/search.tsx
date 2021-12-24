import React, { useEffect, useMemo, useState } from 'react'
import { graphql, PageProps } from 'gatsby'

import Link from '@components/Links/Link'
import Layout from '@components/Layout'
import Hero from '@components/Design/Hero'
import Section from '@components/Design/Section'

import Colors from '@data/colors.json'

import { makeStyles } from '@material-ui/styles'
import Breakpoints from '@data/breakpoints'

import fuse from 'fuse.js'

import SearchIcon from 'mdi-react/SearchIcon'
import generateTransitions from '@functions/generateTransitions'
import clsx from 'clsx'

interface IBlogSearchData {
  fuseSearchIndex: {
    fuse: {
      index: any
      documents: SearchResultDocument[]
    }
  }
}

const useStyles = makeStyles({
  searchLabel: {
    '& > span': {
      display: 'block',
    },
  },
  inputWrapper: {
    marginTop: 8,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 8,
    top: 8,
  },
  input: {
    padding: '6px 8px',
    paddingLeft: 36,

    font: 'inherit',
    border: '2px solid black',

    width: '100%',

    '&:focus': {
      borderColor: Colors.primaryRed,
      outline: 'none',

      '& + $searchIcon': {
        color: Colors.primaryRed,
      },
    },

    '&::-webkit-search-cancel-button': {
      WebkitAppearance: 'none',
      height: 24,
      width: 24,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>")`,
      cursor: 'pointer',
    },
  },
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
    const idx = fuse.parseIndex(fuseSearchIndex.fuse.index)

    return new fuse(
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

  const [searchState, setSearchState] = useState({
    query: '',
    results: [],
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search.substring(1))

    setSearchState(v => ({ ...v, query: params.get('q') || v.query }))
  }, [window.location])

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
        <label htmlFor="search-blog-input" className={classes.searchLabel}>
          <span className="text-speak-up">Search query</span>

          <div className={classes.inputWrapper}>
            <input
              type="search"
              id="search-blog-input"
              className={classes.input}
              onInput={e => setSearchState(v => ({ ...v, query: e.target.value }))}
              value={query}
              placeholder="Start typing..."
            />
            <SearchIcon className={classes.searchIcon} />
          </div>
        </label>
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
