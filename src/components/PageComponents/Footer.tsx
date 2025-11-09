import React from 'react'

import Link from '@components/Links/Link'
import SocialButtons from '@components/SocialButtons'
import styles from './Footer.module.scss'

export default function Footer() {
  const buildTime = new Date().toLocaleString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })

  return (
    <footer className={styles.container}>
      <main className={styles.content}>
        <section className={styles.topContainer}>
          <div className={styles.about}>
            <p className="text-speak-up">&copy; {new Date().getFullYear()} David Wheatley</p>
            <p className="text-whisper">
              <a href="https://github.com/davwheat/personal-portfolio" rel="noopener noreferrer">
                View this site on GitHub
              </a>
              <BulletSeparator />
              This site collects anonymised analytics that does not track individual users.{' '}
              <a href="https://blog.cloudflare.com/free-privacy-first-analytics-for-a-better-web" rel="noopener noreferrer">
                Learn more about Cloudflare analytics
              </a>
            </p>
            <p className="text-whisper">Last updated {buildTime}.</p>
          </div>

          <SocialButtons />
        </section>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="https://mastdatabase.co.uk/blog">Blog</Link>
          <Link href="/my-projects">My projects</Link>
          <Link href="https://mastdatabase.co.uk">Networking</Link>
          <a href="https://github.com/davwheat" rel="noopener noreferrer">
            My GitHub
          </a>
        </nav>
      </main>
    </footer>
  )
}

function BulletSeparator() {
  return <span className={styles.separator}>•</span>
}
