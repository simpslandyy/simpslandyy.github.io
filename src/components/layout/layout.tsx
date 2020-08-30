import React from 'react'
import Navigation from '@components/navigation/navigation'
import cn from 'classnames'
import styles from './layout.module.scss'

interface Props {
  id: string
  children: React.ReactNode
  title?: string
  classes?: string
}
const Layout: React.FunctionComponent<Props> = ({ id, title, classes, children }) => {
  return (
    <section id={id} className={styles.section__wrapper}> 
      <div className={cn(styles.section__content, classes)} > 
        {children}
        {title && <h2 className={styles.section__title}>{title}</h2>}
        {/* // TD: design out a tab nav bar that runs along the right side
        // of the content box */}
      </div>
      <Navigation navItems={navItems}/>
    </section>
  )
}

// TD: REMOVE AFTER INTEGRATING CMS
const navItems = [
  {label: 'Home', uri: ''},
  {label: 'About', uri: '' },
  {label: 'Contact', uri: '' }
]

export default Layout