import React from 'react'
import Layout from '@components/layout/layout'
import styles from './about.module.scss'
import profileImg from '@assets/images/profile.jpg'
import data from '../../../content/data.md'

const About: React.FunctionComponent = () => {
  const { html, attributes: { about } } = data
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