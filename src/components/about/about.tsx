import React from 'react'
import Layout from '@components/layout/layout'
import styles from './about.module.scss'
import profileImg from '@assets/images/profile.jpg'

const About: React.FunctionComponent = () => {
  //td: move this to contentfula
  const profileText = "\
    Landy Simpson is a graduate from the University of Toronto with a \
    Bachelor Honours Degree in Computer Science. Her experience in \
    front-end development using frameworks such as React and Vue, \
    along with her eye for design allow her to create riveting web applications. \
    Aside from dev work, Landy writes inspiring and thought provoking content around her \
    experiences as a first-generation Afro-Carribean-Canadian woman around topics such as education,\
    relationships, and self-love. \
    Her challenges growing up as a first generation Canadian, a person of colour, \
    and a woman in a male dominated industry, motivated her to create content to vocalize \
    injustices, create safe spaces to engage in vulnerable conversations around womanhood and \
    blackness, and provide lifelong tools to youth to better prepare them for future endeavours.\
    Landy Simpson is a graduate from the University of Toronto with a \
    Bachelor Honours Degree in Computer Science. Her experience in \
    front-end development using frameworks such as React and Vue, \
    along with her eye for design allow her to create riveting web applications. \
    Aside from dev work, Landy writes inspiring and thought provoking content around her \
    experiences as a first-generation Afro-Carribean-Canadian woman around topics such as education,\
    relationships, and self-love. \
    Her challenges growing up as a first generation Canadian, a person of colour, \
    and a woman in a male dominated industry, motivated her to create content to vocalize \
    injustices, create safe spaces to engage in vulnerable conversations around womanhood and \
    blackness, and provide lifelong tools to youth to better prepare them for future endeavours.\
    "

  return (
    <Layout id="about" title="About">
      <div className={styles.about__wrapper}>
        <img className={styles.about__img} src={profileImg}/>
        <div className={styles.about__body}>{profileText}</div>
      </div>
    </Layout>
  )
}

export default About