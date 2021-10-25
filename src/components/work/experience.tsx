import React from 'react'
import Navbar from '../sidebar/navBar'
import { Card, CardGrid, H1, Position, Title, Wrapper} from './experience.styles'

export default function Experience() {
    return (
        <>
           <Navbar />
           <H1>Profesional Experience</H1>
       <CardGrid>
       <Card >
        <Title>Zero</Title>
        <Position>Position: front-end</Position>
        </Card>
        <Card>
        <Title>MintGoldDust</Title>
        <Position>Position: front-end</Position>
        </Card>
        <Card>
        <Title>DecentraCorp</Title>
        <Position>Position: lead front-end</Position> 
        </Card>
        <Card>
         <Title>Opolis</Title>
        <Position>Position: senior front-end</Position>
        </Card>
        <Card>
        <Title>Dorg</Title>
        <Position>Position:Marketing affliete for coordinape</Position>
        </Card>
        <Card>
        <Title>Dorg</Title>
        <Position>Position: Marketing affliete for Company Popcorn</Position>
        </Card>
        </CardGrid>
         </>
    )
}
