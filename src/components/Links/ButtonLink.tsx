import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import Colors from '../../data/colors.json'

const useStyles = makeStyles({
  linkButton: {
    appearance: 'none',
    backgroundColor: 'none',
    color: Colors.linkColor,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 700,
    display: 'inline',
    margin: 0,
    padding: 0,
  },
})

interface Props {
  className?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonLink: React.FC<Props> = ({ children, className, onClick, ...props }) => {
  const classes = useStyles()

  return (
    <button onClick={onClick} className={clsx(classes.linkButton, className)} {...props}>
      {children}
    </button>
  )
}

export default ButtonLink
