import React from 'react'
import Navigation from '@components/navigation/navigation'
import cn from 'classnames'
import styles from './layout.module.scss'
import Head from 'next/head'

interface Props {
  id: string
  children: React.ReactNode
  title?: string
  classes?: string
}
const Layout: React.FunctionComponent<Props> = ({ id, title, classes, children }) => {
  return (
    <>
    <Head>
      <title>simpslandyy - software engineer && writer </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="simpslandyy - software engineer && writer" key="title" />
      <meta property="og:description" content="Landy Simpson's is a software engineer and affluent writer." />
      
      <meta property="twitter:url" content="https://twitter.com/simp_lyy" />
      <meta property="twitter:title" content="Landy Simpson's Twitter" />
      <meta property="twitter:description" content="Connect with Landy Simpson on twitter and get updates on new articles!" />



    </Head>
    <section id={id} className={styles.section__wrapper}> 
      <div className={cn(styles.section__content, classes)} > 
        {children}
        {title && <h2 className={styles.section__title}>{title}</h2>}
        {/* // TD: design out a tab nav bar that runs along the right side
        // of the content box */}
      </div>
      <Navigation navItems={navItems}/>
    </section>
    </>
  )
}

// TD: REMOVE AFTER INTEGRATING CMS
const navItems = [
  {label: 'Home', uri: ''},
  {label: 'About', uri: '' },
  {label: 'Contact', uri: '' }
]

export default Layout