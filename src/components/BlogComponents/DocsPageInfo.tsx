import { makeStyles } from '@material-ui/styles'
import React from 'react'
import type { IMdxPageContextWithoutBody } from '@templates/blog-article/BlogPageTemplate'

import dayjs from 'dayjs'
import dayjsLocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(dayjsLocalizedFormat)

interface IDocsPageInfoProps {
  pageContext: IMdxPageContextWithoutBody
}

const useStyles = makeStyles({
  root: {
    color: '#777',
    display: 'flex',
    justifyContent: 'space-between',

    '& > p': {
      margin: 0,
    },
  },
  icon: {
    color: '#999',
    height: '1em',
  },
})

/**
 * Shows some article metadata.
 */
export function DocsPageInfo({ pageContext }: IDocsPageInfoProps) {
  const classes = useStyles()

  if (!pageContext) {
    throw 'No `pageContext` was passed to the DocsPageInfo component. If being used in MDX files, ensure your usage matches: `<DocsPageInfo {...props} />`.'
  }

  return (
    <aside className={classes.root}>
      <p>{pageContext.timeToRead} mins to read</p>
      <p>Written {dayjs(pageContext.frontmatter.created_at).format('LLL')}</p>
    </aside>
  )
}
