import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../sidebar/navBar'
import { BackGround, Card, CardGrid, H1, IMg, IMG, Line, ModalBtn, Position, Stack, Title, Wrapper} from './experience.styles'
import MGD from '../../assets/MGD.png'
import ZNS from '../../assets/ZNS.svg'
import opolis from '../../assets/opolis.png'
import dOrg from '../../assets/dOrg.svg'

export default function Experience() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 4,
    p: 4,
  }; 

    return (
        <>
           <Navbar />
           <H1>Profesional Experience</H1>
       <CardGrid>
           
       <Card >
        <Title onClick={handleOpen} >Zero</Title>
        <Line /> 
        <IMg src={ZNS} />
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Position: front-end</Position>
        <Line />
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
  </Box>
</Modal>
        </Card>
        <Card>
        <Title onClick={handleOpen}>MintGoldDust</Title>
        <Line />
        <img src={MGD} />
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Position: front-end</Position>
        <Line />
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
  </Box>
</Modal>
        </Card>
        <Card>
        <Title onClick={handleOpen}>DecentraCorp</Title>
        <Line />
       
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Position: front-end</Position>
        <Line />
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
  </Box>
</Modal>
        </Card>
        <Card>
         <Title onClick={handleOpen}>Opolis</Title>
         <Line />
         <img src={opolis} />
        
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Position: front-end</Position>
        <Line />
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
  </Box>
</Modal>
        </Card>
        <Card>
        <Title onClick={handleOpen}>Dorg</Title>
        <Line />
        <BackGround>
        <IMG src={dOrg} />
        </BackGround>
       
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Position: front-end</Position>
        <Line />
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
  </Box>
</Modal>
        </Card>
        <Card>
        <Title onClick={handleOpen}>Dorg</Title>
        <Line />
        <BackGround>
        <IMG src={dOrg} />
        </BackGround>
       
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <Position>Position: front-end</Position>
        <Line />
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <Stack>Stack: React,Typescript,Graphql,The graph, IPFS</Stack>
    </Typography>
  </Box>
</Modal>
        </Card>
        </CardGrid>
         </>
    )
}
