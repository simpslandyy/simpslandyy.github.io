import React from 'react'
import Title from '@components/title/title'
import { Jumbotron } from 'react-bootstrap'
import './landing.scss'

const Landing: React.FunctionComponent = () => {
    
    return (
        <Jumbotron fluid className="landing_hero">
            <div className="landing_hero__wrapper">
                <Title />
            </div>
        </Jumbotron>
    )
}

export default Landing