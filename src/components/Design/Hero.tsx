import React from 'react'

import clsx from 'clsx'
import styles from './Hero.module.scss'
import HeroColorVariant, { getHeroColor } from '@data/colors'

interface HeroProps {
  color?: HeroColorVariant
  size?: 'small' | 'normal' | 'large' | 'huge'
  firstElement?: boolean
  className?: string
  innerClassName?: string
  children: React.ReactNode
}

function Hero({ children, color = HeroColorVariant.Text, size = 'normal', firstElement = false, className, innerClassName }: HeroProps) {
  const heroClasses = clsx(
    styles.hero,
    firstElement && styles.firstElement,
    size === 'small' && styles.heroSmall,
    size === 'normal' && styles.heroNormal,
    size === 'large' && styles.heroLarge,
    size === 'huge' && styles.heroHuge,
    className,
  )

  const colorToken = getHeroColor(color)

  return (
    <section
      className={heroClasses}
      style={{
        backgroundColor: colorToken.bg,
        color: colorToken.on,
      }}
    >
      <div className={clsx(styles.heroInner, innerClassName)}>{children}</div>
    </section>
  )
}

export default Hero
