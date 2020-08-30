import React from 'react'
import { Card } from 'react-bootstrap'
import Layout from '@components/layout/layout'
import cn from 'classnames'
import Link  from '@components/link/link'
import styles from './contact.module.scss'

interface CCardProps {
  label: string
  classes?: string
  uri: string
}

const ContactCard = ({ label, uri, classes }: CCardProps) => {
  return (
    <Card className={cn(styles.contact_card, classes)}>
      <Link href={uri} classes={styles.contact_card__gradient}>
        <h3 className={styles.contact_card__title}> {label} </h3>
      </Link>
    </Card>
  )
}
// TD: Using photoshop, create the panels seen in the design,
// and use those as the background image
// rather than trying to use two images to accomplish look
const Contact: React.FunctionComponent = () => {
  return (
    <Layout id='contact' title='Contact'> 
      <div className={styles.contact_card__wrapper}>
        <ContactCard 
          label='Instagram' 
          classes={styles.insta}
          uri='http://www.instagram.com/simpslandyy'
          />
        <ContactCard 
          label='Medium' 
          classes={styles.medium}
          uri='http://www.instagram.com/simpslandyy'
          />
        <ContactCard 
          label='LinkedIn'
          classes={styles.linkedin}
          uri='http://www.instagram.com/simpslandyy'
          />
        <ContactCard 
          label='Twitter'
          classes={styles.twitter}
          uri='http://www.instagram.com/simpslandyy'
          />
      </div>  
    </Layout>
  )
}

export default Contact