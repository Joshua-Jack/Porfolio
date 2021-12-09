import React from 'react'
import Skills from '../../components/tech/skills'
import Topbar from '../../components/headers/Header'
import Navbar from '../../components/sidebar/navBar'

// styles 
import { WrapperTech, WrapperAbout, Container, WrapperSkills, Body, InnerContainer, Opening, About, Technical, Work, ContactMe} from './homepage.styles'
import Shape from '../../components/shapes/shape'
import Experience from '../../components/work/experience'
import Contact from '../../components/contact/contact'


export default function Homepage() {
    return (
        <>   
            <Body>
             {/* <Topbar />
              <Navbar /> */}
              <Opening></Opening>
              <About><Topbar /></About>
              <Technical><Skills /></Technical>
             <Work><Experience /></Work>
             <ContactMe><Contact /></ContactMe>

               </Body>
                </>
    )
} 
