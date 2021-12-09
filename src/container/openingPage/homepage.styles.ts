import styled from 'styled-components';


export const Body = styled.div`
    overflow: hidden;
`

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`
export const Container = styled.div`
     height: 250vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr 30px;

    /* position: absolute;
  left: 0;
  overflow-x: hidden; */
  /* overflow-y: scroll; */
`

export const WrapperAbout = styled.div`
        height: 82.6vh;
        margin-left: 15.3%;
        width: 83%;
        position: absolute;
    /* background-color: #fff; */
`

export const WrapperTech = styled.div`
        height: 82.9vh;
        margin-top: 41.7%;
        margin-left: 15.3%;
        width: 83%;
        position: absolute;
    /* background-color: #fff; */
`

export const WrapperSkills = styled.div`
         height: 82.9vh;
         margin-top: 83.4%;
        margin-left: 15.3%;
        width: 83%;
        position: absolute;
    /* background-color: #fff; */
`

export const Opening = styled.div`
  background-color: grey;
`
export const About = styled.div`
  background-color: black;
`
export const Technical = styled.div`
  background-color: grey;
`
export const Work= styled.div`
  background-color: black;
`
export const ContactMe = styled.div`
  background-color: green;
`