import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import './Contact.css'
const Section = styled.section`
margin: 5 auto;
position: relative;
min-height: 100vh;
overflow: hidden;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
width: 99vw;

`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
font-family: 'kaushan Script'; 
font-weight: 300; 
position: absolute;
top: 5rem;
left: 5%;
z-index: 5; 



`

const ContactPart = styled.div`

top: 15rem;
position: relative;

input{
    font-size: ${props => props.theme.fontmd};
    font-weight: 600; 
}
`

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_atqs9gm', 'template_52c6e0m', form.current, 'Py08gFf53-sXyu9MK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div id='contact'>
            <Section id="fixed-target">
                <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                    Get In Touch
                </Title >
                <ContactPart>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </ContactPart>
            </Section >
        </div>
    );
};

export default Contact;