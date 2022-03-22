import React, { useState } from 'react'

import Colors from '@data/colors.json'

import Section from '@components/Design/Section'
import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'
import { makeStyles } from '@material-ui/styles'
import Fuse from 'fuse.js'

import NumericSortIcon from 'mdi-react/SortNumericVariantIcon'
import NumericSortIconAsc from 'mdi-react/SortNumericAscendingVariantIcon'
import NumericSortIconDesc from 'mdi-react/SortNumericDescendingVariantIcon'

import AlphaSortIcon from 'mdi-react/SortAlphabeticalVariantIcon'
import AlphaSortIconAsc from 'mdi-react/SortAlphabeticalAscendingVariantIcon'
import AlphaSortIconDesc from 'mdi-react/SortAlphabeticalDescendingVariantIcon'

import EARFCNs from '@data/ArfcnData/EARFCNs'
import TextBox from '@components/Inputs/TextBox'
import { debounce } from '@material-ui/core'
import clsx from 'clsx'
import Checkbox from '@components/Inputs/Checkbox'
import { ArfcnDataItem } from '@data/ArfcnData'

const useStyles = makeStyles({
  table: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    display: 'block',
    margin: 'auto',
    maxWidth: '100%',
    width: 'max-content',

    '&::-webkit-scrollbar': {
      width: 16,
      height: 16,
    },
    '&::-webkit-scrollbar-button': {
      width: 0,
      height: 0,
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#fff',
      borderTop: '2px solid #000',
      borderRadius: 0,
      '&:hover': {
        background: '#fff',
      },
      '&:active': {
        background: Colors.lightGrey,
      },
    },
    '&::-webkit-scrollbar-track': {
      background: '#000',
      borderTop: '2px solid #000',
      borderRadius: 0,
      '&:hover': {
        background: '#000',
      },
      '&:active': {
        background: '#000',
      },
    },
    '&::-webkit-scrollbar-corner': {
      background: 'transparent',
    },
  },
  tableHeader: {
    '& th span': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  sortableButton: {
    cursor: 'pointer',
    marginLeft: '4px !important',
    display: 'inline-flex',
  },
  sortableButtonIcon: {
    display: 'inline',
    color: '#c9c9c9',

    '&:hover, &:focus': {
      color: '#fff',
    },

    '&[data-selected="true"]': {
      color: Colors.primaryBlue,
    },
  },
  filter: {
    padding: 24,
    // Makes the padding look more even
    paddingTop: 20,
    background: Colors.lightGrey,
  },
  sortFilterRelevanceCheckbox: {
    marginTop: 8,
  },
})

type AvailableSortColumns = 'arfcn' | 'band' | 'operator' | 'bandwidth'

function MobileNetworkingPage({ location }) {
  const classes = useStyles()

  const [sort, _setSort] = useState<{ column: AvailableSortColumns; direction: 'asc' | 'desc' }>({ column: 'arfcn', direction: 'asc' })

  const [filterQuery, setFilterQuery] = useState('')
  const setFilterQueryDebounced = debounce(setFilterQuery, 250)

  const [sortByFilterRelevance, setSortByFilterRelevance] = useState(true)

  function clickSortButton(col: AvailableSortColumns) {
    return () => {
      _setSort(sort => {
        if (sort.column === col) {
          return { column: col, direction: sort.direction === 'asc' ? 'desc' : 'asc' }
        } else {
          return { column: col, direction: 'asc' }
        }
      })
    }
  }

  function getSortButton(col: AvailableSortColumns, type: 'num' | 'alpha') {
    if (shouldFilter && sortByFilterRelevance) return null

    let Icon = null
    const isSelectedSort = sort.column === col

    if (isSelectedSort) {
      Icon =
        type === 'num'
          ? sort.direction === 'asc'
            ? NumericSortIconAsc
            : NumericSortIconDesc
          : sort.direction === 'asc'
          ? AlphaSortIconAsc
          : AlphaSortIconDesc
    } else {
      Icon = type === 'num' ? NumericSortIcon : AlphaSortIcon
    }

    return (
      <button
        onClick={clickSortButton(col)}
        className={clsx(classes.sortableButton, 'Button--ua-reset')}
        aria-label={`Sort by ${col}, ${isSelectedSort ? (sort.direction === 'asc' ? 'ascending' : 'descending') : 'ascending'}`}
      >
        <Icon className={classes.sortableButtonIcon} data-selected={isSelectedSort} />
      </button>
    )
  }

  const isAlpha = typeof EARFCNs[0][sort.column] === 'string'
  const invert = sort.direction === 'desc' ? -1 : 1

  function sortData(data: ArfcnDataItem[]) {
    return data.sort((a, b) => {
      if (isAlpha) return invert * (a[sort.column] as string).localeCompare(b[sort.column] as string)
      else return invert * (a[sort.column] as number) - (b[sort.column] as number)
    })
  }

  const fuse = new Fuse(EARFCNs, {
    // isCaseSensitive: false,
    // includeScore: false,
    shouldSort: sortByFilterRelevance,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: [{ name: 'arfcn', weight: 5 }, { name: 'band', weight: 4 }, 'operator', 'bandwidth', { name: 'description', weight: 2 }],
  })

  const shouldFilter = filterQuery.trim() !== ''

  const filteredData = shouldFilter
    ? // Only filter
      sortByFilterRelevance
      ? fuse.search(filterQuery).map(x => x.item)
      : sortData(fuse.search(filterQuery).map(x => x.item))
    : // Only search
      sortData(EARFCNs)

  return (
    <Layout location={location} title="UK ARFCN list">
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">UK ARFCN list</h1>
        <p role="doc-subtitle" className="text-loud">
          A (almost certainly incomplete) dataset containing a list of UK mobile network frequencies by their NR/E/U ARFCN.
        </p>
      </Hero>

      <Section usePadding darker>
        <h2 className="text-louder">Intro</h2>

        <p className="text-speak">
          An <strong>ARFCN</strong> is an acronym which stands for absolute radio frequency channel number. This is a unique number which can
          represent any valid radio frequency covered by the appropriate 3GPP radio access technology (RAT) specification.
        </p>
        <p>
          ARFCN can be prefixed with characters to show which RAT they are representing. NRARFCNs are for 5G/
          <abbr data-tooltip aria-label="New Radio">
            NR
          </abbr>
          , EARFCNs are for EUTRA (4G/LTE), UARFCNs are for UMTS (3G) and ARFCNs are for GSM (2G).
        </p>
      </Section>

      <Section width="normal">
        <h2 className="text-louder">List of ARFCNs in the UK</h2>

        <div className={classes.filter}>
          <TextBox label="Filter list" onInput={val => setFilterQueryDebounced(val)} placeholder="Filter by any field..." />

          <Checkbox
            className={classes.sortFilterRelevanceCheckbox}
            disabled={!shouldFilter}
            label="Sort by filter relevance"
            checked={sortByFilterRelevance}
            onChange={() => setSortByFilterRelevance(x => !x)}
          />
        </div>
      </Section>

      <Section width="full">
        <table className={classes.table}>
          <thead className={classes.tableHeader}>
            <tr>
              <th>
                <span>EARFCN {getSortButton('arfcn', 'num')}</span>
              </th>
              <th>
                <span>Bandwidth {getSortButton('bandwidth', 'num')}</span>
              </th>
              <th>
                <span>Band {getSortButton('band', 'num')}</span>
              </th>
              <th>
                <span>Operator {getSortButton('operator', 'alpha')}</span>
              </th>
              <th>
                <span>Description</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(earfcn => (
              <tr key={earfcn.arfcn}>
                <td>{earfcn.arfcn}</td>
                <td>{earfcn.bandwidth ? `${earfcn.bandwidth} MHz` : 'Unknown'}</td>
                <td>B{earfcn.band}</td>
                <td>{earfcn.operator}</td>
                <td>{earfcn.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </Layout>
  )
}

export default MobileNetworkingPage
