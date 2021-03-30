import React from 'react'

import { Chip, makeStyles } from '@material-ui/core'
import type { Project, Tech } from '../../data/projectList'
import generateTransitions from '../../functions/generateTransitions'
import Link from '../Links/Link'
import sortAscending from '../../functions/sortAscending'
import clsx from 'clsx'

interface Props {
  project: Project
  selectedCategories: ReadonlyArray<Tech>
}

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid black',
    padding: 16,
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
  chipSelected: {
    border: '1px solid transparent',
  },
  links: {
    justifySelf: 'flex-end',
    marginTop: 8,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'space-around',
  },
  spring: {
    flexGrow: 1,
  },
})

const ProjectCard: React.FC<Props> = ({ project, selectedCategories }) => {
  const { title, description, links, tech, type, image } = project
  const classes = useStyles()

  const sortedTech = [...tech].sort(sortAscending)

  return (
    <article className={classes.card}>
      <h3 className="text-loud">{title}</h3>
      <div className={classes.categories}>
        {sortedTech.map(category => {
          const isSelected = selectedCategories.includes(category)

          return (
            <Chip
              color="secondary"
              size="small"
              className={clsx(classes.chip, [isSelected && classes.chipSelected])}
              variant={isSelected ? 'default' : 'outlined'}
              label={category}
              key={category}
            />
          )
        })}
      </div>
      <p className="text-speak">{description}</p>

      <div aria-hidden className={classes.spring} />

      {links && (
        <div className={classes.links}>
          {links.live && <Link href={links.live}>View live</Link>}
          {links.vcs && <Link href={links.vcs}>GitHub</Link>}
        </div>
      )}
    </article>
  )
}

export default React.memo(ProjectCard)
