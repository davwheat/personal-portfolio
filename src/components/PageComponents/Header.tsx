import React from 'react'

import { makeStyles } from '@material-ui/core'
import Link from '../Links/Link'

const useStyles = makeStyles({
  header: {
    background: '#000',
    color: '#fff',
    height: 56,
    borderBottom: '1px solid #fff',
    marginBottom: 24,
  },
  headerInnerContainer: {
    maxWidth: 960,
    margin: 'auto',
    paddingLeft: 24,
    paddingRight: 24,
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    // lineHeight: 56,
    fontWeight: 700,
    textDecoration: 'none',
    position: 'relative',
    outline: 'none',
    '&::before': {
      position: 'absolute',
      content: '""',
      display: 'block',
      top: -8,
      bottom: -8,
      left: -12,
      right: -12,
      border: '2px solid #fff',
      transform: 'scale(0)',
      opacity: 0,
      transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
    },
    '&:hover, &:focus, &:active': {
      '&::before': {
        transform: 'scale(1)',
        opacity: 1,
      },
    },
  },
  spacer: {
    flexGrow: 1,
  },
  nav: {
    '& a:any-link': {
      textDecoration: 'none',
      padding: '0 8px',
      lineHeight: '56px',
      height: 56,
      display: 'inline-block',
      '&:hover, &:focus, &:active': {
        backgroundColor: '#fff',
        color: '#000',
      },
    },
  },
})

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.headerInnerContainer}>
        <Link href="/" className={classes.name}>
          David Wheatley
        </Link>
        <div role="presentation" className={classes.spacer} />
        <nav className={classes.nav}>
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
