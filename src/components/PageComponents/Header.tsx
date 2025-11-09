import React, { useRef } from 'react'

import Link from '@components/Links/Link'
import styles from './Header.module.scss'

import MenuIcon from '@assets/icons/menu.svg'
import CloseIcon from '@assets/icons/close.svg'

function Header() {
  const navbarRef = useRef<HTMLDivElement>(null)
  const menuCheckboxRef = useRef<HTMLInputElement>(null)

  function closeMenu() {
    if (menuCheckboxRef.current) {
      menuCheckboxRef.current.checked = false
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerInnerContainer}>
        <Link href="/" className={styles.name}>
          David Wheatley
        </Link>

        <div aria-hidden className={styles.spacer} />

        <input
          ref={menuCheckboxRef}
          onChange={() => (navbarRef.current.style.animationName = '')}
          type="checkbox"
          id="navbar-menu-btn"
          className={styles.navBtn}
        />

        {/* Grey backdrop for mobile nav */}
        <div onClick={closeMenu} aria-hidden className={styles.navBackdrop} />

        <label htmlFor="navbar-menu-btn" className={styles.navBtnLabel}>
          Toggle menu
        </label>

        <nav ref={navbarRef} id="navbar" style={{ animationName: 'none' }} className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/my-projects">My projects</Link>
          <Link href="https://mastdatabase.co.uk">Networking</Link>
          <Link href="https://mastdatabase.co.uk/blog">Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
