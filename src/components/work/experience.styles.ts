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
         width: 70vw;
    height: 80vh;
        padding-top: 15%;
        margin-bottom: 10%;
        margin-left: 18%;
        border: 2px solid black;
`
export const H1 = styled.h1`
    padding-left: 16%;
`
export const Title = styled.h1`
     padding-left: 6%;
`
export const Position = styled.h4`
padding-left: 4%;
`