import styled from "styled-components";


export const CardGrid = styled.div`
    display: grid;
    grid-gap: 100px;
    grid-row: 20px;
    grid-template-columns: 120px 120px 120px;
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
  height: 200px;
  width: 200px;
`

export const FOO = styled.div`
 display: grid;
 grid-template-columns: 300px 300px 300px;
 grid-gap: 100px;
 grid-row: 20px;
 grid-template-areas:
    "1 2 3 4 5"
    "5 6 7 8";
`

export const Img = styled.img`
    height: 100px;
    width: 100px;
`
export const Img2 = styled.img`
height: 40px;
width: 50%;
background:black;

`
export const H1 = styled.h1`
    padding-left: 16%;
`