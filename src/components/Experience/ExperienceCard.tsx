import clsx from 'clsx'
import React from 'react'
import { makeStyles } from '@material-ui/core'

import type { ExperienceDataEntry } from './Experience'
import Link from '../Links/Link'

interface Props {
  data: ExperienceDataEntry
}

const useStyles = makeStyles({
  root: {
    padding: 16,
    border: '2px solid black',
  },
  title: {
    marginBottom: 2,
  },
  subtitle: {
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  projectList: {},
  description: {},
})

const ExperienceCard: React.FC<Props> = ({ data }) => {
  const classes = useStyles()

  return (
    <article className={classes.root}>
      <h3 className={clsx(classes.title, 'text-loud')}>
        <Link href={data.organisationSite}>{data.organisation}</Link>
      </h3>
      <p className={clsx(classes.subtitle, 'text-whisper-loud')}>{data.description}</p>

      <p className={clsx(classes.description, 'text-speak')}>
        As <strong>{data.role}</strong>, I have&hellip;
      </p>

      <ul className={clsx(classes.projectList, 'list')}>
        {data.projects.map((project: string) => (
          <li key={project} className={'text-speak'}>
            {project}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ExperienceCard
