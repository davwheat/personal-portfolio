import React from 'react'
import makeStyles from '@mui/styles/makeStyles';

import ProjectCard from './ProjectCard'
import Tabs from '../Tabs'

import sortDescending from '../../functions/sortDescending'
import Breakpoints from '../../data/breakpoints'
import ProjectListData from '../../data/projectList'

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
  },
  chipSelected: {
    border: '1px solid transparent',
  },
})

const sortedProjectList = [...ProjectListData].sort((a, b) => sortDescending(a.title, b.title))

const webProjects = sortedProjectList.filter(p => p.type === 'Web')
const mobileProjects = sortedProjectList.filter(p => p.type === 'Mobile')
const apiProjects = sortedProjectList.filter(p => p.type === 'API')
const desktopProjects = sortedProjectList.filter(p => p.type === 'Desktop')

const ProjectList: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <h2 className="text-louder">Project type</h2>
      <Tabs
        tabNames={['Web', 'Mobile', 'APIs', 'Desktop']}
        tabItems={[
          <div className={classes.list}>
            {webProjects.map(project => {
              return <ProjectCard key={`${project.title}__${project.description}`} project={project} />
            })}
          </div>,

          <div className={classes.list}>
            {mobileProjects.map(project => {
              return <ProjectCard key={`${project.title}__${project.description}`} project={project} />
            })}
          </div>,

          <div className={classes.list}>
            {apiProjects.map(project => {
              return <ProjectCard key={`${project.title}__${project.description}`} project={project} />
            })}
          </div>,

          <div className={classes.list}>
            {desktopProjects.map(project => {
              return <ProjectCard key={`${project.title}__${project.description}`} project={project} />
            })}
          </div>,
        ]}
      />
    </>
  )
}

export default ProjectList
