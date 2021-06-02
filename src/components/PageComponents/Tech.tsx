import React from 'react'

import HTMLLogo from '../../assets/tech/html5.svg'
import ReactLogo from '../../assets/tech/react.svg'
import GatsbyLogo from '../../assets/tech/gatsby.svg'
import FlarumLogo from '../../assets/tech/flarum.svg'

import { makeStyles } from '@material-ui/core'
import TechItem from './TechItem'
import Breakpoints from '../../data/breakpoints'

const useStyles = makeStyles({
  fullWidth: {
    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%',

    marginTop: 64,
    [Breakpoints.upTo.desktopSmall]: {
      marginTop: 48,
    },
    [Breakpoints.upTo.tablet]: {
      marginTop: 36,
    },
  },
  container: {
    maxWidth: 960,
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    margin: 'auto',
    gap: 48,
    paddingLeft: 32,
    paddingRight: 32,
    justifyContent: 'center',
    [Breakpoints.upTo.desktopSmall]: {
      gap: 40,
    },
    [Breakpoints.upTo.tablet]: {
      gap: 32,
    },
    [Breakpoints.upTo.phone]: {
      gap: 24,
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
  {
    name: 'Flarum',
    icon: FlarumLogo,
    from: 2020,
  },
].sort((a, b) => a.from - b.from)

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
