import React from 'react'

import { makeStyles } from '@material-ui/core'
import uuid from 'react-uuid'
import Breakpoints from '../../data/breakpoints'
import clsx from 'clsx'

interface TechItemProps {
  /**
   * SVG src of tech logo
   */
  src: string
  /**
   * Name of the tech
   */
  name: string
  /**
   * Year I started using the tech
   */
  from: number
}

const useStyles = makeStyles({
  tech: {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxWidth: 200,
    [Breakpoints.upTo.phone]: {
      maxWidth: 160,
    },
  },
  bubble: {
    filter: 'drop-shadow(0 0 8px var(--neutral-grey))',
    width: '100%',
    margin: 'auto',
    [Breakpoints.upTo.tablet]: {
      width: '85%',
    },
    [Breakpoints.upTo.phone]: {
      width: '70%',
    },
  },
  techHeading: {
    paddingTop: 12,
  },
  centreText: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
})

const TechItem: React.FC<TechItemProps> = ({ src, name, from }) => {
  const headingId = uuid()
  const classes = useStyles()

  return (
    <div className={classes.tech}>
      <img alt={`${name} logo`} src={src} draggable={false} className={classes.bubble} />
      <div className={classes.centreText}>
        <h1 id={headingId} className={clsx('text-loud', classes.techHeading)}>
          {name}
        </h1>
        {/* <div
        role="slider"
        aria-readonly="true"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow={proficiency}
        aria-labelledby={headingId}
        className={styles.bar}
        data-value={proficiency + ' of 5'}
      >
        <span style={{ width: `${(proficiency / 5) * 100}%` }} className={styles.barInner} />
      </div> */}
        <p>Since {from}</p>
      </div>
    </div>
  )
}

export default TechItem
