import React from 'react'
import Navbar from '../sidebar/navBar'
import { Body, Card, CardGrid, FOO, H1, ImageBackground, IMG, Img, Img2, Img3, Title, TitleItem, TitleJest, Wrapper, Wrapper2, Wrapper3, Wrapper4, Wrapper5, Wrapper6 } from './skills.styles'
import nextjs from '../../assets/nextjs.svg'
import reactjs from '../../assets/reactjs.svg'
import js from '../../assets/js.svg'
import typescript from '../../assets/typescript.svg'
import git from '../../assets/git.svg'
import ethers from '../../assets/ethers.svg'
import jest from '../../assets/jest.svg'
import graphql from '../../assets/graphql.svg'
import IPFS from '../../assets/IPFS.png'
import { Box, Button, Modal, Typography } from '@mui/material'
import { Line } from '../work/experience.styles'



export default function Skills() {
    const style = {
        position: 'absolute' as 'absolute',
        display:'flex',
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
           <H1> Skills </H1>
           {/* <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Typescript</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Javascript</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Assembly Script</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Jest</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>React JS</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Next JS</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Ethers JS</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Git/Github</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Graph QL</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>IPFS</TitleItem>    
           <Line />
           </Typography>
           </Box>  */}
           <Wrapper>
               <Wrapper2>  
               <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Languges</TitleItem>    
           <Line /> 
           </Typography>
         <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Typescript</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Javascript</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Assembly Script</TitleItem>    
           <Line />
           </Typography>
           </Wrapper2>
               <Wrapper3>
               <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Libaries</TitleItem>    
           <Line /> 
           </Typography>
               <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Next JS</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>React JS</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>IPFS</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Ethers JS</TitleItem>    
           <Line />
           </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Jest</TitleItem>    
           <Line />
           </Typography>
               </Wrapper3>
               <Wrapper4>
           <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Git/Github</TitleItem>    
           <Line />
           </Typography>
               </Wrapper4>
               <Wrapper5>
               <Typography id="modal-modal-title" variant="h6" component="h2">
           <TitleItem>Graph QL</TitleItem>    
           <Line />
           </Typography>
               </Wrapper5>
               <Wrapper6>
               </Wrapper6>
           </Wrapper>


          </>
    ) 
}
 
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import nextjs from '../../assets/nextjs.svg'
// import reactjs from '../../assets/reactjs.svg'

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//       <>
//       <h1>Technologies</h1>
//       <FOO>
//     <Card sx={{ maxWidth: 500 }}>
//       <CardMedia
//         component="img"
//         height="180"
//         image={nextjs}
//         alt="Paella dish"
//       />
//     </Card>
//     <Card sx={{ maxWidth: 345 }}>
//     <CardMedia
//       component="img"
//       height="180"
//       width='1'
//       image={reactjs}
//       alt="Paella dish"
//     />
//   </Card>
//   <Card sx={{ maxWidth: 345 }}>
//   <CardMedia
//     component="img"
//     height="180"
//     image={nextjs}
//     alt="Paella dish"
//   />
// </Card>
// <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="180"
//         image={nextjs}
//         alt="Paella dish"
//       />
//     </Card>
//     </FOO>

//     </>
//   );
// }
