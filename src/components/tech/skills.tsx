import React from 'react'
import Navbar from '../sidebar/navBar'
import { Card, CardGrid, FOO, H1, Img, Img2 } from './skills.styles'
import nextjs from '../../assets/nextjs.svg'
import reactjs from '../../assets/reactjs.svg'
import js from '../../assets/js.svg'
import typescript from '../../assets/typescript.svg'
import git from '../../assets/git.svg'
import ethers from '../../assets/ethers.svg'
import jest from '../../assets/jest.svg'
import graphql from '../../assets/graphql.svg'



export default function Skills() {
    return (
        <>
           <Navbar />
        <H1> Skills </H1>
        <CardGrid>
         <Card >
             <h2>React JS</h2>
             <img src={reactjs} /> 
         </Card>
         <Card >
        <h2> Next JS</h2> 
        <Img src={nextjs } />
         </Card>
         <Card>
         <h2>Jest</h2>	
         <img src={jest} />   
         </Card>
         <Card>
        <h2>Typescript </h2> 
         <img src={typescript} />	
         </Card>
         <Card>
        <h2>Javascript</h2>
        <Img src={js}/>
         </Card>
         <Card>
        <h2>Ethers	js</h2> 
         <Img2 src={ethers} />
         </Card>
         <Card>
         <h2>GraphQl </h2>
         <img src={graphql}/>
         </Card>
         <Card>
        <h2> Git | Github   </h2> 
         <img src={git} />     
         </Card>
         </CardGrid>
         
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
