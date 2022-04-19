import React, { useState } from 'react'

import Colors from '@data/colors.json'

import { makeStyles } from '@material-ui/styles'
import Fuse from 'fuse.js'
import { debounce } from '@material-ui/core'
import clsx from 'clsx'

import NumericSortIcon from 'mdi-react/SortNumericVariantIcon'
import NumericSortIconAsc from 'mdi-react/SortNumericAscendingVariantIcon'
import NumericSortIconDesc from 'mdi-react/SortNumericDescendingVariantIcon'

import AlphaSortIcon from 'mdi-react/SortAlphabeticalVariantIcon'
import AlphaSortIconAsc from 'mdi-react/SortAlphabeticalAscendingVariantIcon'
import AlphaSortIconDesc from 'mdi-react/SortAlphabeticalDescendingVariantIcon'

import Section from '@components/Design/Section'
import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'
import TextBox from '@components/Inputs/TextBox'
import Checkbox from '@components/Inputs/Checkbox'

import type { ArfcnDataItem } from '@data/ArfcnData'
import Breakpoints from '@data/breakpoints'

import EARFCNs from '@data/ArfcnData/GB/EARFCNs'
import NRARFCNs from '@data/ArfcnData/GB/NRARFCNs'

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

    '&[data-selected]:not([data-selected="false"])': {
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
  arfcnTypeButtonContainer: {
    display: 'grid',
    margin: 0,
    marginBottom: 16,

    gridTemplateColumns: 'repeat(auto-fit, minmax(10px, 1fr))',

    [Breakpoints.between.phone.and.bigPhone]: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(auto-fit, minmax(10px, 1fr))',
    },

    [Breakpoints.upTo.phone]: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(auto-fit, minmax(10px, 1fr))',
    },
  },
  arfcnTypeButton: {
    padding: 16,
    color: '#000',
    textAlign: 'center',
    font: 'inherit',
    fontWeight: 'bold',
    cursor: 'pointer',
    position: 'relative',
    appearance: 'none',
    border: 'none',
    background: 'none',

    [Breakpoints.upTo.phone]: {
      padding: 12,
    },

    '& .sr-only': {
      display: 'none',
    },

    '&[data-selected]:not([data-selected="false"])': {
      background: '#000',
      color: '#fff',

      '& .sr-only': {
        display: 'inline',
      },
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    '&:hover::after': {
      border: `2px solid #000`,
    },

    '&:focus': {
      outline: `4px solid ${Colors.primaryBlue}`,

      '&:not(:focus-visible)': {
        outline: 'none',
      },
    },
  },
})

type AvailableSortColumns = 'arfcn' | 'band' | 'operator' | 'bandwidth'

function getBandPrefix(rat: 'lte' | 'nr'): string | null {
  if (rat === 'lte') return 'B'
  else if (rat === 'nr') return 'n'

  return null
}

function MobileNetworkingPage({ location }) {
  const classes = useStyles()

  const [sort, _setSort] = useState<{ column: AvailableSortColumns; direction: 'asc' | 'desc' }>({ column: 'arfcn', direction: 'asc' })

  const [filterQuery, setFilterQuery] = useState('')
  const setFilterQueryDebounced = debounce(setFilterQuery, 250)

  const [sortByFilterRelevance, setSortByFilterRelevance] = useState(true)
  const [selectedRat, setSelectedRat] = useState<'lte' | 'nr'>('lte')

  const dataset = { nr: NRARFCNs, lte: EARFCNs }[selectedRat]

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

  const isAlpha = typeof dataset[0][sort.column] === 'string'
  const invert = sort.direction === 'desc' ? -1 : 1

  function sortData(data: ArfcnDataItem[]) {
    return data.sort((a, b) => {
      if (isAlpha) return invert * (a[sort.column] as string).localeCompare(b[sort.column] as string)
      else return invert * (a[sort.column] as number) - (b[sort.column] as number)
    })
  }

  const fuse = new Fuse(dataset, {
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
      sortData(dataset)

  return (
    <Layout location={location} title="UK ARFCN list" description="A (mostly complete) list of UK mobile networks' ARFCNs for 4G LTE and 5G NR.">
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">UK ARFCN list</h1>
        <p role="doc-subtitle" className="text-loud">
          An almost certainly incomplete dataset of UK mobile network frequencies by their NR/E/UARFCN.
        </p>
      </Hero>

      <Section usePadding darker>
        <h2 className="text-louder">Intro</h2>

        <p className="text-speak">
          An <strong>ARFCN</strong> is an acronym which stands for absolute radio frequency channel number. This is a unique number which can
          represent any valid radio frequency covered by the appropriate 3GPP radio access technology (RAT)&nbsp;specification.
        </p>

        <p className="text-speak">
          ARFCN can be prefixed with characters to show which RAT they are representing. NR ARFCNs are for 5G/
          <abbr data-tooltip aria-label="New Radio">
            NR
          </abbr>
          , EARFCNs are for EUTRA (4G/LTE), UARFCNs are for UMTS (3G) and ARFCNs are for GSM&nbsp;(2G).
        </p>

        <p className="text-speak">
          In 4G LTE and previous generations of RAT, ARFCNs represented the centre of a carrier band, but with 5G NR this changed to the NR ARFCN
          representing any frequency within the network's carrier, and the centre point is often determined using an offset sent in
          the&nbsp;SIB1.
        </p>
      </Section>

      <Section width="normal">
        <h2 className="text-louder">UK ARFCN table</h2>

        <h3 className="text-loud">Radio access technology (RAT)</h3>
        <nav className={classes.arfcnTypeButtonContainer}>
          <button className={classes.arfcnTypeButton} onClick={() => setSelectedRat('nr')} data-selected={selectedRat === 'nr'}>
            5G NR
            <span className="sr-only">(Selected)</span>
          </button>
          <button className={classes.arfcnTypeButton} onClick={() => setSelectedRat('lte')} data-selected={selectedRat === 'lte'}>
            4G LTE
            <span className="sr-only">(Selected)</span>
          </button>
        </nav>

        <h3 className="text-loud">Filtering</h3>
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
                <td>
                  {getBandPrefix(selectedRat)}
                  {earfcn.band}
                </td>
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
