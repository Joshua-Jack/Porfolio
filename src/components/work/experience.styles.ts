import styled from "styled-components";

export const CardGrid = styled.div`
     display: grid;
    grid-gap: 50px;
    grid-row: 20px;
    grid-template-columns: 220px 220px 220px;
    grid-template-areas:
    "1 2 3 4"
    "5 6 7 8";
    background-color: #fff;
    color: #444;
    width: 70vw;
    height: 10vh;
    padding-left: 16%;
    padding-top: 2%;
    `

export const Card = styled.div`
   max-width: 350px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  /* margin: 30px auto; */
  height: 220px;
  width: 250px;
`


export const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        position: relative;
        margin-top: 14%;
    left: 42%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 900px;
    height: 350px;
`
export const H1 = styled.h1`
    margin-top: 7%;
    padding-left: 16%;
    color: #ffff;
`

export const Box = styled.div`
  background-color: #fff;
    background-image: linear-gradient(to right, #ffff 0%, gray 85%);
    padding: 10px 10px;
    margin-top: 40px;
    width: 50%;
    height: 50%;
`
export const Title = styled.button`
     background: none;
     border: none;
     font-size: 1.9em;
     padding-left: 7%;
     padding-top: 3%;`





export const Position = styled.div`
padding-left: 4%;
color: white;
`

export const Line = styled.hr`
    border-style: ridge;
    width: 100%;
    margin-right: 30%;
    color: black;
`

export const ModalBtn = styled.button`
    margin: 0.5em;
    font-size: 1em;
    margin-top: 40%;
    background: none;
    /* text-decoration: none; */
    color: black;
    border: none;
    text-align: center;
`
export const Stack = styled.div`
    padding-left: 4%;
    color: white;
    margin-bottom: 2%;
`

export const IMG = styled.img`
height: 40px;
margin-top: 15%;
margin-left: 20%;
padding-bottom: 7%;

`

export const BackGround = styled.div`
background: blue;
width: 60%;
margin-left: 20%;
border-radius: 3%;
`

export const OpenModal = styled.button`
    display: none;
`

export const IMg = styled.img`
    height: 34%;
    width: 34%;
    padding-left: 32%;
    margin-top: 10%;

`

export const Wrapper2 = styled.div`
   margin-left: 20%;
  `;

export const Wrapper3 = styled.div`
  `;