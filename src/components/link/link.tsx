import React from 'react'

interface LinkProps {
  classes?: string
  href: string
  label: string
}
const Link: React.FunctionComponent<LinkProps> = (props) => {
  const {
    classes,
    href,
    key,
    label
  } = props

  return (
    <a className={classes} href={href}>
      {label}
    </a>
  )
}

export default Link