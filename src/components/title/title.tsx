import React from 'react'
import Layout from '@components/layout/layout'
import styles from './title.module.scss'

const Title = () => (
  <Layout id='home' classes={styles.title__wrapper}>
      <div className={styles.title__wrapper_row}>
          <h1 id={styles.love}> LOVE.</h1> 
          <h1 id={styles.inspire}> INSPIRE. </h1>
      </div>
      <div className={styles.title__wrapper_row}> 
          <h1 id={styles.create}> CREATE.</h1> 
          <h1 id={styles.indulge}> INDULGE.</h1>
      </div>
      <div className={styles.title__wrapper_statement}>
          <p> Maybe put a quote here, something about my brand mission.</p>
          <p> Lorem ipsum, something is more about brand mission. </p>
      </div>
  </Layout>
)


// TD: REMOVE AFTER INTEGRATING CMS
const navItems = [
  {label: 'About Me', uri: '' },
  {label: 'Services', uri: '' },
  {label: 'Blog', uri: '' },
  {label: 'Contact', uri: '' }
]

export default Title;