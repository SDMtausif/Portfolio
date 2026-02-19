import React from 'react'
import Container from '../../Layout/Container'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
const AboutMe = () => {
  return (
    <Container>
       <div className='flex z-50' >
        <AboutLeft/>
        <AboutRight/>
       </div>
    </Container>
  )
}

export default AboutMe