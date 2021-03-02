import React from 'react'

import HTMLLogo from '../../images/tech/html5.svg'
import ReactLogo from '../../images/tech/react.svg'
import GatsbyLogo from '../../images/tech/gatsby.svg'

import Breakpoints from '../../data/breakpoints'

import { makeStyles } from '@material-ui/styles'
import TechItem from './TechItem'

const useStyles = makeStyles({
  fullWidth: {
    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%',
    marginTop: 48,
  },
  container: {
    maxWidth: 960,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    margin: 'auto',
    gap: 16,
    paddingLeft: 16,
    paddingRight: 16,
    [Breakpoints.between.tablet.and.desktopSmall]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    [Breakpoints.between.phone.and.tablet]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [Breakpoints.upTo.phone]: {
      gridTemplateColumns: '1fr',
    },
  },
})

const tech = [
  {
    name: 'HTML, CSS & JS',
    icon: HTMLLogo,
    from: 2013,
  },
  {
    name: 'React',
    icon: ReactLogo,
    from: 2018,
  },
  {
    name: 'Gatsby.js',
    icon: GatsbyLogo,
    from: 2019,
  },
  {
    name: 'React Native',
    icon: ReactLogo,
    from: 2020,
  },
]

const Tech: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.fullWidth}>
      <div className={classes.container}>
        {tech.map(t => (
          <TechItem key={t.name} src={t.icon} name={t.name} from={t.from} />
        ))}
      </div>
    </div>
  )
}

export default Tech
