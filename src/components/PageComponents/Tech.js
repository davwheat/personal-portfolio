import React from 'react'

import HTMLLogo from '../../images/tech/html5.svg'
import ReactLogo from '../../images/tech/react.svg'
import GatsbyLogo from '../../images/tech/gatsby.svg'
import FlutterLogo from '../../images/tech/flutter.svg'
import PHPLogo from '../../images/tech/php.svg'

import styles from './styles/Tech.module.css'

export default function Tech() {
  return (
    <div className={styles.fullWidth}>
      <div className={styles.container}>
        <TechItem src={HTMLLogo} name="HTML, CSS & JS" proficiency={5} from={2013} />
        <TechItem src={ReactLogo} name="React" proficiency={4} from={2018} />
        <TechItem src={GatsbyLogo} name="Gatsby JS" proficiency={4} from={2019} />
        <TechItem src={PHPLogo} name="PHP" proficiency={3} from={2018} />
        <TechItem src={FlutterLogo} name="Flutter" proficiency={2} from={2020} />
        <div className={styles.spacer} />
      </div>
    </div>
  )
}

function TechItem({ src, name, proficiency, from }) {
  return (
    <div className={styles.tech}>
      <img alt={name + ' logo'} src={src} draggable={false} className={styles.bubble} />
      <h1 className="text-loud">{name}</h1>
      <div
        role="slider"
        aria-readonly="true"
        aria-valuemin="0"
        aria-valuemax="5"
        aria-valuenow={proficiency}
        aria-meter-name={name + ' meter'}
        className={styles.bar}
        data-value={proficiency + ' of 5'}
      >
        <span style={{ width: `${(proficiency / 5) * 100}%` }} className={styles.barInner} />
      </div>
      <p>Since {from}</p>
    </div>
  )
}
