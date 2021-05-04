import React from 'react'
import { makeStyles } from '@material-ui/core'

import ProjectCard from './ProjectCard'

import ProjectListData from '../../data/projectList'

import generateTransitions from '../../functions/generateTransitions'
import sortAscending from '../../functions/sortAscending'
import Breakpoints from '../../data/breakpoints'

const useStyles = makeStyles({
  filter: {
    marginBottom: 24,
    display: 'flex',
    gap: 32,
    [Breakpoints.upTo.bigPhone]: {
      flexDirection: 'column',
      gap: 16,
    },
  },
  checkbox: {
    marginTop: -9,
    marginBottom: -9,
  },
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(auto-fill, 1fr)',
    gap: 16,
    [Breakpoints.upTo.tablet]: {
      gridTemplateColumns: '1fr',
    },
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
  },
  chip: {
    fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    ...generateTransitions(['background', 'color', 'border-color']),
  },
  chipSelected: {
    border: '1px solid transparent',
  },
})

const sortedProjectList = [...ProjectListData].sort((a, b) => sortAscending(a.type, b.type) || sortAscending(a.title, b.title))

const ProjectList: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.list}>
        {sortedProjectList.map(project => {
          return <ProjectCard key={`${project.title}__${project.description}`} project={project} />
        })}
      </div>
    </div>
  )
}

export default ProjectList
