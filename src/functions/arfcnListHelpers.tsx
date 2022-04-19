import React from 'react'

import Colors from '@data/colors.json'
import { ArfcnDataItem } from '@data/ArfcnData'

import Fuse from 'fuse.js'
import clsx from 'clsx'

import NumericSortIcon from 'mdi-react/SortNumericVariantIcon'
import NumericSortIconAsc from 'mdi-react/SortNumericAscendingVariantIcon'
import NumericSortIconDesc from 'mdi-react/SortNumericDescendingVariantIcon'

import AlphaSortIcon from 'mdi-react/SortAlphabeticalVariantIcon'
import AlphaSortIconAsc from 'mdi-react/SortAlphabeticalAscendingVariantIcon'
import AlphaSortIconDesc from 'mdi-react/SortAlphabeticalDescendingVariantIcon'
import { makeStyles } from '@material-ui/core'
import { SupportedArfcnListRats } from '@components/MobileNetworking/ArfcnList'

export type AvailableSortColumns = 'arfcn' | 'band' | 'operator' | 'bandwidth'

export interface ISort {
  column: AvailableSortColumns
  direction: 'asc' | 'desc'
}

export function getArfcnName(rat: SupportedArfcnListRats): string {
  if (rat === 'nr') return 'SSB-ARFCN'
  if (rat === 'lte') return 'EARFCN'
  return 'ARFCN'
}

export function getBandPrefix(rat: SupportedArfcnListRats): string | null {
  if (rat === 'lte') return 'B'
  else if (rat === 'nr') return 'n'

  return null
}

export function createFuse(dataset: ArfcnDataItem<string>[], sortByFilterRelevance: boolean) {
  return new Fuse(dataset, {
    shouldSort: sortByFilterRelevance,
    keys: [{ name: 'arfcn', weight: 5 }, { name: 'band', weight: 4 }, 'operator', 'bandwidth', { name: 'description', weight: 2 }],
  })
}

export function sortArfcnData(data: ArfcnDataItem<string>[], sort: ISort) {
  const isAlpha = typeof data[0][sort.column] === 'string'
  const invert = sort.direction === 'desc' ? -1 : 1

  return data.sort((a, b) => {
    if (isAlpha) return invert * (a[sort.column] as string).localeCompare(b[sort.column] as string)
    else return invert * (a[sort.column] as number) - (b[sort.column] as number)
  })
}

export function filterAndSortData(data: ArfcnDataItem<string>[], filterQuery: string, sortByFilterRelevance: boolean, sort: ISort) {
  const fuse = createFuse(data, sortByFilterRelevance)

  if (filterQuery.trim() !== '') {
    // Only filter
    if (sortByFilterRelevance) return fuse.search(filterQuery).map(x => x.item)
    else
      return sortArfcnData(
        fuse.search(filterQuery).map(x => x.item),
        sort,
      )
  }

  // Only search
  return sortArfcnData(data, sort)
}

const useSortButtonStyles = makeStyles({
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
})

export function getSortButton(
  col: AvailableSortColumns,
  type: 'num' | 'alpha',
  sort: ISort,
  filterQuery: string,
  sortByFilterRelevance: boolean,
  _setSort: React.Dispatch<React.SetStateAction<ISort>>,
) {
  const classes = useSortButtonStyles()

  if (filterQuery.trim() !== '' && sortByFilterRelevance) return null

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
      onClick={handleSortButtonClick(col, _setSort)}
      className={clsx(classes.sortableButton, 'Button--ua-reset')}
      aria-label={`Sort by ${col}, ${isSelectedSort ? (sort.direction === 'asc' ? 'ascending' : 'descending') : 'ascending'}`}
    >
      <Icon className={classes.sortableButtonIcon} data-selected={isSelectedSort} />
    </button>
  )
}

function handleSortButtonClick(col: AvailableSortColumns, _setSort: React.Dispatch<React.SetStateAction<ISort>>) {
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
