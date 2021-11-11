import React from 'react'
import Navbar from '../sidebar/navBar'
import { Body, Card, CardGrid, FOO, H1, ImageBackground, IMG, Img, Img2, Img3, Title, TitleJest } from './skills.styles'
import nextjs from '../../assets/nextjs.svg'
import reactjs from '../../assets/reactjs.svg'
import js from '../../assets/js.svg'
import typescript from '../../assets/typescript.svg'
import git from '../../assets/git.svg'
import ethers from '../../assets/ethers.svg'
import jest from '../../assets/jest.svg'
import graphql from '../../assets/graphql.svg'
import IPFS from '../../assets/IPFS.png'



export default function Skills() {
    return (
        <>
           <Navbar />
           <Body>
        <H1> Skills </H1>
        <CardGrid>
         <Card >
             <Title>React JS</Title>
             <IMG src={reactjs} /> 
         </Card>
         <Card >
        <Title> Next JS</Title> 
        <Img src={nextjs } />
         </Card>
         <Card>
         <TitleJest>Jest</TitleJest>	
         <IMG src={jest} />   
         </Card>
         <Card>
        <Title>Typescript </Title> 
         <IMG src={typescript} />	
         </Card>
         <Card>
        <Title>Javascript</Title>
        <Img src={js}/>
         </Card>
         <Card>
        <Title>Ethers	js</Title> 
        < ImageBackground>
         <Img2 src={ethers} />
         </ImageBackground>
         </Card>
         <Card>
         <Title>GraphQl </Title>
         <IMG src={graphql}/>
         </Card>
         <Card>
        <Title> Git | Github   </Title> 
         <IMG src={git} />     
         </Card>
         <Card>
        <Title> IPFS  </Title> 
         <Img3 src={IPFS} />     
         </Card>
         </CardGrid>
         </Body>
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
