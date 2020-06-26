import React from 'react'
import Navigation from '@components/navigation/navigation'
import './title.scss'

const Title = () => (
  <div className="title__wrapper">
      <div className="title__wrapper--row"> 
          <h1 id="love"> LOVE.</h1> 
          <h1 id="inspire"> INSPIRE. </h1>
      </div>
      <div className="title__wrapper--row"> 
          <h1 id="create"> CREATE.</h1> 
          <h1 id="indulge"> INDULGE.</h1>
      </div>
      <div className="title__wrapper--statement">
        {/* // TD: revisit design to make the navigations and mission statement more clear */}
          <p> Maybe put a quote here, something about my brand mission.</p>
          <p> Lorem ipsum, something is more about brand mission. </p>
      </div>

      <Navigation />
  </div>
)


export default Title;