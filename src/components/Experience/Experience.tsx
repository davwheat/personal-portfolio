import React from 'react'
import ExperienceCard from './ExperienceCard'
import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../data/breakpoints'

const ExperienceData: ReadonlyArray<ExperienceDataEntry> = [
  {
    organisation: 'Flarum',
    organisationSite: 'https://flarum.org',
    description: 'Free, open-source forum software',
    role: 'a core developer trainee',
    projects: ['Improved accessibility', 'Replaced old JS libraries with native methods', 'Pioneered CSS modernisation'],
  },
  {
    organisation: 'giffgaff',
    organisationSite: 'https://community.giffgaff.com',
    description: 'UK mobile network',
    role: 'a web developer',
    projects: [
      'Fixed CSS styling issues',
      'Created a dark theme for their community forum',
      'Worked with developers to implement new community features',
    ],
  },
  {
    organisation: 'Techway Solutions',
    organisationSite: 'https://play.google.com/store/apps/details?id=dev.davwheat.flueleakagecalculator',
    description: 'Engineering services',
    role: 'a mobile developer',
    projects: ['Created a app used for certifying industrial flues'],
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
    [Breakpoints.upTo.tablet]: {
      gridTemplateColumns: '1fr',
    },
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
