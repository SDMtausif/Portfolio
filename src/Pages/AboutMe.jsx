import React from 'react'
import Container from '../Layout/Container'
import AboutLeft from './Aboutme/AboutLeft'
import AboutRight from './Aboutme/AboutRight'
const AboutMe = () => {
  return (
    <Container>
       <div className='flex'>
        <AboutLeft/>
        <AboutRight/>
       </div>
    </Container>
  )
}

export default AboutMe