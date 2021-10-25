import React from 'react'
import About from '../../components/about/about'
import Skills from '../../components/tech/skills'
import Topbar from '../../components/headers/Header'
import Navbar from '../../components/sidebar/navBar'

// styles 
import { WrapperTech, WrapperAbout, Container, WrapperSkills, Body, InnerContainer} from './homepage.styles'
import Shape from '../../components/shapes/shape'
import Experience from '../../components/work/experience'


export default function Homepage() {
    return (
        <>   
  <Body>
      <Topbar />
    
        {/* <Shape /> */}
            <Navbar />

            </Body>
           
         
    
        </>
    )
} 
