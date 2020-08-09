import React from 'react'

import styles from './styles/footer.module.css'
import Link from '../../Links/Link'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <main className={styles.content}>
        <section className={styles.about}>
          <p className="text-speak-up">&copy; {new Date().getFullYear()} David Wheatley</p>
          <p className="text-whisper">
            <a href="https://github.com/davwheat/personal-portfolio" rel="noopener noreferrer">
              View this site on GitHub
            </a>
          </p>
        </section>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/my-work">Portfolio</Link>
          <a href="https//github.com/davwheat" rel="noopener noreferrer">
            My GitHub
          </a>
        </nav>
      </main>
    </footer>
  )
}
