import React, { useState } from 'react'
import { Chip, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

import ProjectCard from './ProjectCard'
import Checkbox from '../Inputs/Checkbox'

import ProjectListData, { AllTech } from '../../data/projectList'

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

const sortedTech = [...AllTech].sort(sortAscending)
const sortedProjectList = [...ProjectListData].sort((a, b) => sortAscending(a.type, b.type) || sortAscending(a.title, b.title))

const ProjectList: React.FC = () => {
  const classes = useStyles()
  const [selectedTech, setSelectedTech] = useState(sortedTech)
  const [mustMatchAll, setMustMatchAll] = useState(false)

  return (
    <div>
      <nav className={classes.filter}>
        <div>
          <p className="text-speak-up">Filter by technology</p>
          <div>
            <Checkbox
              // className={classes.checkbox}
              checked={mustMatchAll}
              onChange={e => setMustMatchAll(e.target.checked)}
              label={mustMatchAll ? 'Matches all selected' : 'Matches any selected'}
            />
          </div>
        </div>

        <div className={classes.techList}>
          {sortedTech.map(tech => {
            const isSelected = selectedTech.includes(tech)

            return (
              <Chip
                color="secondary"
                size="small"
                className={clsx(classes.chip, [isSelected && classes.chipSelected])}
                variant={isSelected ? 'default' : 'outlined'}
                label={tech}
                key={tech}
                onClick={() => {
                  setSelectedTech(selTech => {
                    if (selTech.includes(tech)) {
                      return selTech.filter(t => t !== tech)
                    }

                    return [...selTech, tech]
                  })
                }}
              />
            )
          })}
        </div>
      </nav>
      <div className={classes.list}>
        {sortedProjectList.map(project => {
          if (selectedTech.length > 0) {
            if (mustMatchAll && !selectedTech.every(t => project.tech.includes(t))) return null
            else if (!selectedTech.some(t => project.tech.includes(t))) return null
          }

          return <ProjectCard key={`${project.title}__${project.description}`} project={project} selectedCategories={selectedTech} />
        })}
      </div>
    </div>
  )
}

export default ProjectList
