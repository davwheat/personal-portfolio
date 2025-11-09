import clsx from 'clsx'
import React from 'react'

import type { ExperienceDataEntry } from './Experience'
import Link from '../Links/Link'
import styles from './ExperienceCard.module.scss'

interface Props {
  data: ExperienceDataEntry
}

const ExperienceCard: React.FC<Props> = ({ data }) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={clsx(styles.title, 'text-loud')}>
            <Link href={data.organisationSite}>{data.organisation}</Link>
          </h3>
          <p className={clsx(styles.description, 'text-speak')}>
            As <strong>{data.role}</strong>, I have&hellip;
          </p>
        </div>
        <p className={clsx(styles.dateRange, 'text-whisper')}>
          {data.startDate}
          {data.startDate !== data.endDate && <> &ndash; {data.endDate ?? 'present'}</>}
        </p>
      </div>

      <p className={clsx(styles.subtitle, 'text-whisper')}>{data.description}</p>

      <ul className={clsx(styles.projects, 'list')}>
        {data.projects.map((project: string) => (
          <li key={project} className="text-speak">
            {project}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ExperienceCard
