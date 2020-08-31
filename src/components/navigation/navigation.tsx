import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy'
import styles from './navigation.module.scss'

interface NavProps {
  navItems: { label: string, uri: string }[]
}

const Navigation = ({ navItems }: NavProps) => (
  <div className={styles.navigation__wrapper}>
    <Scrollspy 
      className={styles.navigation__list}
      currentClassName='navigation__current'
      items={navItems.map(item => item.label.toLowerCase())}>
      { navItems.map((item, key) => (
        <li key={item.label + '_' + key}>
            <AnchorLink href={`#${item.label.toLowerCase()}`} onClick={null}>
              {item.label}
            </AnchorLink>
        </li>
        ))}
    </Scrollspy>
  </div>
)

export default Navigation