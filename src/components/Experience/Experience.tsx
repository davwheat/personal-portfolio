import React from 'react'
import ExperienceCard from './ExperienceCard'
import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../data/breakpoints'

const ExperienceData: ReadonlyArray<ExperienceDataEntry> = [
  {
    organisation: 'Thales UK',
    organisationSite: 'https://www.thalesgroup.com/en',
    description: 'Defence technology: sonar',
    role: 'a software engineer apprentice',
    yearStart: 2022,
    projects: [
      'Implemented a new operating system for S2087 sonar',
      'Investigated and fixed issues with the new OS',
      'Ensured feature parity with previous versions',
      'Engaged with stakeholders to ensure requirements are met',
    ],
  },
  {
    organisation: 'Blomstra',
    organisationSite: 'https://blomstra.net',
    description: 'Managed Flarum hosting, and custom development',
    role: 'a full-stack web developer',
    yearStart: 2021,
    projects: [
      'Worked to project briefs to deliver new Flarum features',
      'Created and upgraded existing open-source Flarum extensions',
      'Integrated Flarum with other third-party services',
      'Engaged in key communication with external clients',
    ],
  },
  {
    organisation: 'Flarum',
    organisationSite: 'https://flarum.org',
    description: 'Open source, extensible forum framework',
    role: 'a front-end web developer',
    yearStart: 2021,
    projects: [
      'Improved accessibility',
      'Replaced old JS libraries with newer and native methods',
      'Pioneered CSS modernisation using grid and flexbox',
      'Contributed towards the shift to Typescript and ES6+',
    ],
  },
  {
    organisation: 'giffgaff',
    organisationSite: 'https://community.giffgaff.com',
    description: 'UK mobile network with 1M+ members',
    role: 'a freelance web developer',
    yearStart: 2019,
    yearEnd: 2021,
    projects: [
      'Discovered and fixed styling issues',
      'Produced a dark theme for their community forum',
      'Implemented new community features',
      'Optimised stylesheets and Javascript',
    ],
  },
  {
    organisation: 'Techway Solutions',
    organisationSite: 'https://play.google.com/store/apps/details?id=dev.davwheat.flueleakagecalculator',
    description: 'Industrial engineering services',
    role: 'a mobile app developer',
    yearStart: 2020,
    yearEnd: 2020,
    projects: [
      'Created a app used for certifying industrial flues',
      'Engaged with the client to ensure the specification is met',
      'Provided ongoing maintenance for the app into the future',
      'Interfaced with native APIs to implement complex features',
    ],
  },
] as const

export type ExperienceDataEntry = {
  organisation: string
  organisationSite: string
  description: string
  role: string
  projects: ReadonlyArray<string> | string[]
  yearStart: number
  yearEnd?: number
}

const useStyles = makeStyles({
  list: {
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,

    width: '85vw',
    maxWidth: 1000,
    marginLeft: '50%',
    transform: 'translateX(-50%)',

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
