import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../sidebar/navBar'
import { BackGround, Card, CardGrid, H1, IMg, IMG, Line, ModalBtn, Position, Stack, Title, Wrapper, Wrapper2, Wrapper3} from './experience.styles'
import MGD from '../../assets/MGD.png'
import ZNS from '../../assets/ZNS.svg'
import opolis from '../../assets/opolis.png'
import dOrg from '../../assets/dOrg.svg'

export default function Experience() {
  const style = {
    position: 'absolute' as 'absolute',
    top: '55%',
    left: '41%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 350,
    bgcolor: 'grey',
    // border: '1px solid #000',
    // boxShadow: 4,
    // p: 4,
  }; 

    return (
        <>
           <Navbar />
           <H1>Profesional Experience</H1>
           {/* <Wrapper>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Zero</Position>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Position>Mint Gold Dust</Position>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Position>Decentracorp</Position>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Wrapper2> 
   <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Opolis</Position>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Position>Doingud</Position>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Position>Polywrap</Position>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    </Typography>
    </Wrapper2>
    </Wrapper> */}
    <Wrapper>
      <Wrapper3>
      <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Zero</Position>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Position>Mint Gold Dust</Position>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Position>Decentracorp</Position>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
   </Wrapper3>
    <Wrapper2>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Opolis</Position>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Position>Doingud</Position>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    <Position>Polywrap</Position>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
    <Line />
    </Typography>
    </Wrapper2>
    </Wrapper>
         </>
    )
}
