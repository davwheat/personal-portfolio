import React, { useState } from 'react'

import Section from '@components/Design/Section'
import Link from '@components/Links/Link'
import ButtonLink from '@components/Links/ButtonLink'
import styles from './Breadcrumbs.module.scss'

export interface IBreadcrumb {
  /**
   * URL for the page
   */
  url: string
  /**
   * Textual label
   */
  t: string
}

export interface IBreadcrumbsProps {
  data: IBreadcrumb[]
}

export default function Breadcrumbs({ data }: IBreadcrumbsProps) {
  const breadcrumbsToDisplay: (IBreadcrumb | null)[] = []

  const [breadcrumbsExpanded, setBreadcrumbsExpanded] = useState(false)

  // Limit breadcrumbs to 3 items
  if (breadcrumbsExpanded || data.length <= 3) breadcrumbsToDisplay.push(...data)
  else {
    breadcrumbsToDisplay.push(data[0])
    breadcrumbsToDisplay.push(null)
    breadcrumbsToDisplay.push(data[data.length - 2], data[data.length - 1])
  }

  return (
    <Section width="wider" darker usePadding>
      <nav aria-label="Breadcrumbs">
        <ol className={styles.nav}>
          {breadcrumbsToDisplay.map((crumb, index) => {
            const separator = index < breadcrumbsToDisplay.length - 1 && <span aria-hidden="true">/</span>

            if (crumb === null) {
              return (
                <li key="__ellipses__">
                  <ButtonLink aria-label="Expand breadcrumbs" data-tooltip onClick={() => setBreadcrumbsExpanded(true)}>
                    ...
                  </ButtonLink>
                  {separator}
                </li>
              )
            }

            return (
              <li key={crumb.url}>
                <Link href={crumb.url} aria-current={index === breadcrumbsToDisplay.length - 1 ? 'page' : undefined}>
                  {crumb.t}
                </Link>
                {separator}
              </li>
            )
          })}
        </ol>
      </nav>
    </Section>
  )
}
