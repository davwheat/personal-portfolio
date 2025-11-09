import React from 'react'

import Twitter from 'mdi-react/TwitterIcon'
import LinkedIn from 'mdi-react/LinkedinIcon'
import GitHub from 'mdi-react/GithubIcon'
import Telegram from '@assets/icons/telegram.inline.svg'
import styles from './SocialButtons.module.scss'

const SOCIAL_MEDIA = [
  {
    name: 'Twitter',
    icon: <Twitter size={24} />,
    url: 'https://twitter.com/davwheat_',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedIn size={24} />,
    url: 'https://linkedin.com/in/davwheat',
  },
  {
    name: 'GitHub',
    icon: <GitHub size={24} />,
    url: 'https://github.com/davwheat',
  },
  {
    name: 'Telegram',
    icon: <Telegram width={24} height={24} />,
    url: 'https://t.me/davwheat',
  },
]

export default function SocialButtons() {
  return (
    <div className={styles.container}>
      {SOCIAL_MEDIA.map(social => (
        <a key={social.name} href={social.url} title={social.name} rel="noopener noreferrer" target="_blank" className={styles.button}>
          {social.icon}
        </a>
      ))}
    </div>
  )
}
