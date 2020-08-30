import React, { ReactNode } from 'react'

interface LinkProps {
  classes?: string
  href: string
  children: ReactNode
}
const Link: React.FunctionComponent<LinkProps> = (props) => {
  const {
    classes,
    href,
    children
  } = props

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  )
}

export default Link