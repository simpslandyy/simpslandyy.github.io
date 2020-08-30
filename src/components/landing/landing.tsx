import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Title from '@components/title/title'
import About from '@components/about/about'
import Contact from '@components/contact/contact'
import styles from './landing.module.scss'

const Landing: React.FunctionComponent = () => {
    
    return (
        <Jumbotron fluid className={styles.landing_hero}>
            <Title />
            <About />
            <Contact /> 
        </Jumbotron>
    )
}

export default Landing