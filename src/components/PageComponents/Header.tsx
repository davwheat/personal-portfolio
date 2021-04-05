import React, { useRef } from 'react'

import { makeStyles } from '@material-ui/core'
import Link from '../Links/Link'
import Breakpoints from '../../data/breakpoints'
import generateTransitions, { Durations } from '../../functions/generateTransitions'

const MOBILE_NAV_ZINDEX = 1000000

const useStyles = makeStyles({
  header: {
    background: '#000',
    color: '#fff',
    height: 56,
    borderBottom: '1px solid #fff',
    marginBottom: 24,
    lineHeight: '56px',
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
    [Breakpoints.upTo.bigPhone]: {
      padding: 16,
      paddingBottom: 64,
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      background: '#000',
      zIndex: MOBILE_NAV_ZINDEX,
      willChange: 'transform',
      transform: 'translateY(100%)',
      animationFillMode: 'forwards',
      animationDuration: 15000,
      animationIterationCount: 1,
      animationName: '$menuExit',
      ...generateTransitions('transform', 'long'),
      '@media (max-height: 600px)': {
        paddingBottom: 48,
      },
    },
  },
  navBtn: {
    display: 'none',
    [Breakpoints.upTo.bigPhone]: {
      '&:checked': {
        '&~ $nav': {
          animationName: '$menuEnter',
        },
        '&~ $navBackdrop': {
          transform: 'translate(0, 0)',
          opacity: 1,
        },
        '&~ $navBtnLabel': {
          '&::before': {
            opacity: 1,
          },
          '&::after': {
            opacity: 0,
          },
        },
      },
    },
  },
  navBtnLabel: {
    display: 'block',
    fontSize: 0,
    height: 56,
    width: 56,
    position: 'relative',
    zIndex: MOBILE_NAV_ZINDEX + 1,
    marginRight: -20,
    '&::after, &::before': {
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: 'center',
      ...generateTransitions('opacity'),
    },
    '&::after': {
      fontSize: 32,
      content: '"≡"',
      fontWeight: 700,
      opacity: 1,
      transform: 'translateY(-2px)',
    },
    '&::before': {
      fontSize: 28,
      content: '"🗙"',
      fontWeight: 400,
      opacity: 0,
      transform: 'translateY(-1px)',
    },
  },
  navBackdrop: {
    display: 'block',
    transform: 'translate(2000vw, 2000vh)',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.25)',
    opacity: 0,
    zIndex: MOBILE_NAV_ZINDEX - 1,
    ...generateTransitions('opacity', 'long'),
  },
  '@keyframes menuEnter': {
    '0%': {
      visibility: 'hidden',
      transform: 'translateY(100%)',
    },
    '0.01%': {
      visibility: 'visible',
      transform: 'translateY(100%)',
    },
    '100%': {
      visibility: 'visible',
      transform: 'translateY(0)',
    },
  },
  '@keyframes menuExit': {
    '0%': {
      visibility: 'visible',
      transform: 'translateY(0)',
    },
    '99.99%': {
      visibility: 'visible',
      transform: 'translateY(100%)',
    },
    '100%': {
      visibility: 'hidden',
      transform: 'translateY(100%)',
    },
  },
})

const Header: React.FC = () => {
  const classes = useStyles()
  const navbarRef = useRef<HTMLDivElement>(null)

  return (
    <header className={classes.header}>
      <div className={classes.headerInnerContainer}>
        <Link href="/" className={classes.name}>
          David Wheatley
        </Link>

        <div aria-hidden className={classes.spacer} />

        <input onChange={() => (navbarRef.current.style.animationName = '')} type="checkbox" id="navbar-menu-btn" className={classes.navBtn} />

        {/* Grey backdrop for mobile nav */}
        <div aria-hidden className={classes.navBackdrop} />

        <label htmlFor="navbar-menu-btn" className={classes.navBtnLabel}>
          Toggle menu
        </label>

        <nav ref={navbarRef} id="navbar" style={{ animationName: 'none' }} className={classes.nav}>
          <Link href="/">Home</Link>
          <Link href="/my-projects">My projects</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
