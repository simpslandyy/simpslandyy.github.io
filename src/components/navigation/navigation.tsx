import React from 'react'
import Link from '@components/link/link'
import './navigation.scss'

interface NavProps {
  navItems: { label: string, uri: string }[]
}

// TD: REMOVE AFTER INTEGRATING CMS
const navItems = [
  {label: "About Me", uri: "" },
  {label: "Services", uri: "" },
  {label: "Blog", uri: "" },
  {label: "Contact", uri: "" }
]

const Navigation = () => (
  <div className='navigation__wrapper'>
    <ul className='navigation__list'>
      { navItems.map((item, key) => (
        <li key={item.label + '_' + key}>
          <Link href={item.uri} label={item.label} />
        </li>
        ))}
    </ul>
  </div>
)

export default Navigation