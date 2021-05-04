import React from 'react'

import { Chip, makeStyles } from '@material-ui/core'

import Link from '../Links/Link'

import generateTransitions from '../../functions/generateTransitions'
import sortAscending from '../../functions/sortAscending'
import clsx from 'clsx'

import type { Project, ProjectType } from '../../data/projectList'

interface Props {
  project: Project
}

const CARD_PADDING = 16 as const

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid black',
    padding: CARD_PADDING,
    position: 'relative',
  },
  header: {
    display: 'flex',
    gap: 8,
  },
  heading: {
    flexGrow: 1,
  },
  categories: {
    justifySelf: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 8,
    marginTop: -4,
  },
  chip: {
    fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    ...generateTransitions(['background', 'color']),
  },
  links: {
    justifySelf: 'flex-end',
    marginTop: 8,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'space-around',
    marginLeft: -CARD_PADDING,
    marginBottom: -CARD_PADDING,
    marginRight: -CARD_PADDING,
  },
  link: {
    padding: CARD_PADDING,
    flex: 1,
    textAlign: 'center',
    '&:hover, &:focus': {
      background: '#000',
      color: '#fff',
    },
  },
  spring: {
    flexGrow: 1,
  },
  image: {
    marginLeft: -CARD_PADDING,
    marginRight: -CARD_PADDING,
    marginTop: 12,
    marginBottom: CARD_PADDING,
  },
  typeChip: {
    fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    textTransform: 'uppercase',
    fontWeight: 'bold',
    borderRadius: 4,
    color: '#fff',
    background: typeToColor(),
    border: 'none',
    '& > *': {
      padding: 8,
    },
    '&[data-type="web"i]': {
      background: typeToColor('Web'),
    },
    '&[data-type="api"i]': {
      background: typeToColor('API'),
    },
    '&[data-type="mobile"i]': {
      background: typeToColor('Mobile'),
    },
  },
})

function typeToColor(type?: ProjectType) {
  switch (type) {
    case 'Web':
      return '#119ccf'
    case 'API':
      return '#e6961e'
    case 'Mobile':
      return '#8b19bd'
    default:
      return '#000'
  }
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { title, description, links, tech, type, ImageComponent } = project
  const classes = useStyles()

  const sortedTech = [...tech].sort(sortAscending)

  return (
    <article className={classes.card}>
      <header className={classes.header}>
        <h3 className={clsx('text-loud', classes.heading)}>{title}</h3>
        <Chip data-type={type} className={classes.typeChip} component="p" label={type} />
      </header>

      <div className={classes.categories}>
        {sortedTech.map(category => {
          return <Chip color="secondary" size="small" className={clsx(classes.chip)} variant={'default'} label={category} key={category} />
        })}
      </div>

      {ImageComponent && <ImageComponent className={classes.image} />}

      <div aria-hidden className={classes.spring} />

      <p className="text-speak">{description}</p>

      {links && (
        <div className={classes.links}>
          {links.live && (
            <Link className={classes.link} href={links.live}>
              View live
            </Link>
          )}
          {links.vcs && (
            <Link className={classes.link} href={links.vcs}>
              GitHub
            </Link>
          )}
        </div>
      )}
    </article>
  )
}

export default React.memo(ProjectCard)
