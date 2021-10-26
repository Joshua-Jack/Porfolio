import React from 'react'
import { Card, Container, Header,Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Label, Wrapper } from './navbar.style'
import { useHistory } from 'react-router-dom';
import './navbar.styles.css'

export default function Navbar() {

    const history = useHistory();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          history.replace('/WorkExperience');
        } catch (error) {
          console.error(error);
        }
      };
      const handleSubmit2 = async (e: any) => {
        e.preventDefault();
        try {
          history.replace('/Technologies');
        } catch (error) {
          console.error(error);
        }
      };
      const handleSubmit3 = async (e: any) => {
        e.preventDefault();
        try {
          history.replace('/Contact');
        } catch (error) {
          console.error(error);
        }
      };
      const handleSubmit4 = async (e: any) => {
        e.preventDefault();
        try {
          history.replace('/');
        } catch (error) {
          console.error(error);
        }
      };
      const handleSubmit5 = async (e: any) => {
        e.preventDefault();
        try {
          history.replace('/About');
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <Wrapper>
             <Label onClick={handleSubmit4}>Home</Label>
            <Label onClick={handleSubmit}>Work Experience</Label>
            <Label onClick={handleSubmit2}>Technologies</Label>
            <Label onClick={handleSubmit5}>About</Label>
            <Label onClick={handleSubmit3}>Contact</Label>
        </Wrapper>

        // <>
        // <div className='wrapper'>
        //     <footer>
        //     <button className='button' onClick={handleSubmit}>Work Experience </button>
        //     <button className='button' onClick={handleSubmit2}>Technologies </button>
        //     <button className='button' onClick={handleSubmit3}>Contact </button>
        //     <button className='button' onClick={handleSubmit4}>Home </button>
        //     </footer>
        // </div>
        // </>

    )
}
