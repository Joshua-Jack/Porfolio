import React from 'react'
import Navbar from '../sidebar/navBar'
import { A, H1, IMG, InnerWrapper, Wrapper } from './contact.styles'
import github from '../../assets/github.svg'
import gmail from '../../assets/gmail.svg'
import discord from '../../assets/discord.svg'

export default function Contact() {
    return (
        <>
        <Wrapper>
            <InnerWrapper>
            <A href='https://github.com/Joshua-Jack'><IMG src={github} /></A>
            </InnerWrapper>
            <InnerWrapper>
           <A href='mailto:josh@dorg.tech'><IMG src={gmail} /> </A>
           </InnerWrapper>
           <InnerWrapper>
            <A href='https://github.com/Joshua-Jack'><IMG  src={discord} /></A>
            </InnerWrapper>
        </Wrapper>
         {/* <Navbar /> */}
         </>
    )
}
