import React from 'react'
import Navbar from '../sidebar/navBar'
import { A, H1, IMG, InnerWrapper, Wrapper } from './contact.styles'
import github from '../../assets/github.svg'
import gmail from '../../assets/gmail.svg'
import discord from '../../assets/discord.svg'

export default function Contact() {
    return (
        <>
         <H1>Contact Me</H1>
        <Wrapper>
            <InnerWrapper>
           <IMG  src={github} />
            <A href='https://github.com/Joshua-Jack'>github.com/Joshua-Jack</A>
            </InnerWrapper>
            <InnerWrapper>
           <IMG src={gmail} /> 
           <A href='mailto:josh@dorg.tech'>josh@dorg.tech</A>
           </InnerWrapper>
           <InnerWrapper>
           <IMG  src={discord} />
            <A href='https://github.com/Joshua-Jack'>Discord</A>
            </InnerWrapper>
        </Wrapper>
         <Navbar />
         </>
    )
}
