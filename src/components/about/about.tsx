import React from 'react'
import { Div2 } from '../headers/style.components'
import { Container, Menu, Segment, Visibility, Image } from 'semantic-ui-react'
import { AboutCard, H1, Label, Wrapper } from './about.styles'
import Navbar from '../sidebar/navBar'


export default function About() {
    return (
        <>
        <Navbar/>

        <H1>Intro</H1>
        <Wrapper>
        <AboutCard>
            <Label>
            Hi, Im Josh I am a full-stack Blockchain Engineer who focuses on
            <br></br>
            web3 integrations. I'm always excited about learning new technologies and
            <br></br>
            creating good looking,functional, and easy to use web pages, 
            <br></br>
            services, and apps. I'm self-starting and self-determined, a creative 
            <br></br>
            problem solver, I take pride in my work, and always push to do the best work.
            <br></br>
            
        </Label>
        </AboutCard>
        </Wrapper>
          
        </>
    )
}


