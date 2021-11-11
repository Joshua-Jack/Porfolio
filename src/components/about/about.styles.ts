import styled from "styled-components";


export const Wrapper = styled.div`
     width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-top: 10%;
        margin-left: 10%;
`
export const AboutCard = styled.div`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  /* margin: 30px auto; */ 
  height: 50vh;
  width: 30vw; 
`

export const Label = styled.div`
  /* border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); */
  color: white;
  /* margin: 30px auto; */
  /* height: 60vh;
  width: 60vw;  */
  height: 50vh;
  width: 30vw; 
  font-size: 1.5em;
  padding-top: 15%;
  padding-left: 4%;
` 

export const H1 = styled.h1`
    padding-left: 16%;
`