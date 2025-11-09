import React from 'react'

import clsx from 'clsx'
import styles from './ButtonLink.module.scss'

interface Props {
  className?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const ButtonLink: React.FC<Props> = ({ children, className, onClick, ...props }) => {
  return (
    <button className={clsx(styles.linkButton, className)} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default ButtonLink
