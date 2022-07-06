import React from 'react';
import styled from 'styled-components';
import aboutImg from "../../assets/Images/aboutImg1 .png"
import './About.css'

const Section = styled.section`

position: relative;
min-height: 90vh;
overflow: hidden;
width: 80vw;
display: flex;
margin: 0 auto;

@media (max-width: 48em){
width: 90vh;
}

@media (max-width: 30em){
  width: 45vh;
  flex-direction: column-reverse;
 
}
`


const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
font-family: 'kaushan Script'; 
font-weight: 300; 
position: absolute;
top: 5rem;
left: 15%;
z-index: 5; 


`

const LeftPart = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5; 
margin-top: 15%;

@media (max-width: 48em){
width: 45vh;
}

@media (max-width: 30em){
  width: 45vh;
  margin-top: 1rem;
}

.wrapper{
    @media (max-width: 30em){
  
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
justify-content: center;
align-items: center;
}
}

`
const RightPart = styled.div`
width: 50%;
position: relative;

img{
    width: 60%;
    height: auto;
    margin-top: 10%;
    margin-left: 30%;
}
@media (max-width: 48em){
width: 50vh;
}

@media (max-width: 30em){
  width: 45vh;
  margin-top: 10rem;

  img{
    width: 100%;
    margin: 0;
    
}
}

`

const About = () => {
    return (
        <div id='about'>
            <Section id="fixed-target ">
                <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                    About me
                </Title>
                <LeftPart data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
                    Hi, I'm Shahariar Bhuiyan, MERN full stack developer from Dhaka, Bangladesh. I understand Mongo DB, Express JS,  Rect JS,  Javascript, Node JS, CSS3, HTML5,  CSS Frameworks, responsiveness, and other key technologies. <br /> <br />I would like to work in a position where I can effectively utilize and
                    improve my interpersonal communication skills along with problem
                    solving and analytical skills.
                    <div class="wrapper">
                        <div class="buttonabout"> <a href="https://drive.google.com/uc?export=download&id=1unVUD26izcg576xHFpobeeaJDMheEomJ" target="_blank"><span>download resume</span></a></div>
                    </div>
                </LeftPart>

                <RightPart>
                    <img src={aboutImg} alt="About Me" />
                </RightPart>
            </Section>
        </div>
    );
};

export default About;