import React from 'react'

import Link from '@components/Links/Link'

import sortDescending from '@functions/sortDescending'
import clsx from 'clsx'
import styles from './ProjectCard.module.scss'

import type { Project, ProjectType } from '@data/projectList'

interface Props {
  project: Project
}

function typeToColor(type?: ProjectType) {
  switch (type) {
    case 'Web':
      return '#119ccf'
    case 'API':
      return '#e6961e'
    case 'Mobile':
      return '#8b19bd'
    case 'Desktop':
      return '#36a339'
    default:
      return '#000'
  }
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { title, description, links, tech, type, ImageComponent } = project

  const sortedTech = [...tech].sort(sortDescending)

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={clsx('text-loud', styles.heading)}>{title}</h3>
        <span className={styles.typeChip} style={{ '--chip-bg': typeToColor(type) } as React.CSSProperties}>
          {type}
        </span>
      </header>

      <div className={styles.categories}>
        {sortedTech.map(category => {
          return (
            <span key={category} className={styles.chip}>
              {category}
            </span>
          )
        })}
      </div>

      {ImageComponent && <ImageComponent className={styles.image} />}

      <div aria-hidden className={styles.spring} />

      <p className="text-speak">{description}</p>

      {links && (
        <div className={styles.links}>
          {links.live && (
            <Link className={styles.link} href={links.live}>
              View live
            </Link>
          )}
          {links.vcs && (
            <Link className={styles.link} href={links.vcs}>
              GitHub
            </Link>
          )}
        </div>
      )}
    </article>
  )
}

export default React.memo(ProjectCard)
