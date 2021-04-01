import React from 'react'
import ExperienceCard from './ExperienceCard'
import { makeStyles } from '@material-ui/core'

const ExperienceData: ReadonlyArray<ExperienceDataEntry> = [
  {
    organisation: 'giffgaff',
    organisationSite: 'https://community.giffgaff.com',
    description: 'UK mobile network',
    role: 'a freelancer',
    projects: ['Fixed styling issues', 'Added a dark theme for the forum'],
  },
  {
    organisation: 'Flarum',
    organisationSite: 'https://flarum.org',
    description: 'Free, open-source forum software',
    role: 'a core developer trainee',
    projects: ['Improved accessibility', 'Replaced old JS libraries with native methods', 'Pioneered CSS modernisation'],
  },
] as const

export type ExperienceDataEntry = {
  organisation: string
  organisationSite: string
  description: string
  role: string
  projects: ReadonlyArray<string> | string[]
}

const useStyles = makeStyles({
  list: {
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  },
})

const Experience: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.list}>
      {ExperienceData.map(entry => (
        <ExperienceCard data={entry} key={`${entry.organisation}__${entry.role}`} />
      ))}
    </div>
  )
}

export default Experience
