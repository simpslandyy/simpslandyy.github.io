import React from 'react'
import Layout from '@components/layout/layout'
import styles from './about.module.scss'
import data from '../../../content/data.md'

const About: React.FunctionComponent = () => {
  const { html, attributes: { about } } = data
  const profileImg = 'https://blogv2.s3.ca-central-1.amazonaws.com/profile.jpg'
  return (
    <Layout id="about" title="About">
      <div className={styles.about__wrapper}>
        <img className={styles.about__img} src={profileImg}/>
        <div className={styles.about__body} dangerouslySetInnerHTML={{ __html: about.description }}/>
      </div>
    </Layout>
  )
}

export default About