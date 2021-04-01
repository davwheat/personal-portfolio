import React, { useState } from 'react'

import ProjectListData, { AllTech } from '../../data/projectList'

import ProjectCard from './ProjectCard'
import sortAscending from '../../functions/sortAscending'
import { Checkbox, Chip, FormControlLabel, makeStyles } from '@material-ui/core'
import generateTransitions from '../../functions/generateTransitions'
import clsx from 'clsx'

const useStyles = makeStyles({
  filter: {
    marginBottom: 24,
    display: 'flex',
    gap: 32,
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

const ProjectList: React.FC = () => {
  const classes = useStyles()
  const [selectedTech, setSelectedTech] = useState(sortedTech)
  const [mustMatchAll, setMustMatchAll] = useState(false)

  return (
    <div>
      <nav className={classes.filter}>
        <div>
          <p className="text-speak">Filter by technology</p>
          <FormControlLabel
            control={
              <Checkbox
                className={classes.checkbox}
                checked={mustMatchAll}
                onChange={e => setMustMatchAll(e.target.checked)}
                color="secondary"
              />
            }
            label="Must match all"
          />
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
        {ProjectListData.map(project => {
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
