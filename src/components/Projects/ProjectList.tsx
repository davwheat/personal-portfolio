import React from 'react'

import ProjectCard from './ProjectCard'
import Tabs from '@components/Tabs'

import sortDescending from '@functions/sortDescending'
import ProjectListData from '@data/projectList'
import styles from './ProjectList.module.scss'

const sortedProjectList = [...ProjectListData].sort((a, b) => sortDescending(a.title, b.title))

const webProjects = sortedProjectList.filter(p => p.type === 'Web')
const mobileProjects = sortedProjectList.filter(p => p.type === 'Mobile')
const apiProjects = sortedProjectList.filter(p => p.type === 'API')
const desktopProjects = sortedProjectList.filter(p => p.type === 'Desktop')

const ProjectList: React.FC = () => {
  return (
    <>
      <h2 className="text-louder">Project type</h2>
      <Tabs
        tabNames={['Web', 'Mobile', 'APIs', 'Desktop']}
        tabItems={[
          <div key="web" className={styles.container}>
            {webProjects.map(project => {
              return <ProjectCard key={`${project.title}__${project.description}`} project={project} />
            })}
          </div>,

          <div key="mobile" className={styles.container}>
            {mobileProjects.map(project => {
              return <ProjectCard key={`${project.title}__${project.description}`} project={project} />
            })}
          </div>,

          <div key="api" className={styles.container}>
            {apiProjects.map(project => {
              return <ProjectCard key={`${project.title}__${project.description}`} project={project} />
            })}
          </div>,

          <div key="desktop" className={styles.container}>
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
