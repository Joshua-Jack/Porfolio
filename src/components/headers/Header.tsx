import React from 'react'
import About from '../about/about'
import { AboutCard, H1, Label, Wrapper } from '../about/about.styles'
import Contact from '../contact/contact'
import { Div, Headers, OuterWrapper, Title } from './style.components' 

export default function Topbar() {
    return (
       <>
       <OuterWrapper>
       <Headers>
            <Title>Joshua Jack
                Blockchain Engineer</Title>
        <Contact /></Headers>
        <Wrapper>
        {/* <H1>Intro</H1> */}
        {/* <AboutCard> */}
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
        {/* </AboutCard> */}
        </Wrapper>
        </OuterWrapper>
        </>
    )
}
