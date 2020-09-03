import React from 'react'
import Layout from '@components/layout/layout'
import styles from './title.module.scss'
import data from '../../../content/data.md'

const Title = () => {
  const { attributes: { title } } = data

  return ( 
    <Layout id='home' classes={styles.title__wrapper}>
        <div className={styles.title__wrapper_row}>
            <h1 id={styles.love}> {title.A} </h1> 
            <h1 id={styles.inspire}> {title.B} </h1>
        </div>
        <div className={styles.title__wrapper_row}> 
            <h1 id={styles.create}> {title.C} </h1> 
            <h1 id={styles.indulge}> {title.D} </h1>
        </div>
        <div className={styles.title__wrapper_statement}>
          <div dangerouslySetInnerHTML={{ __html: title.sub }} />
        </div>
    </Layout>
  )
}

export default Title;