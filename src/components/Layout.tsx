import React from 'react'

import Header from './PageComponents/Header'
import Footer from './PageComponents/Footer'
import SEO from './SEO'

import styles from './Layout.module.scss'

interface LayoutProps {
  title: string
  description?: string
  children: React.ReactNode
}

function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <SEO title={title} description={description} />

      <Header />

      <main className={styles.mainContent}>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
