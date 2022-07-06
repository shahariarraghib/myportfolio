import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import video from '../assets/black_-_13495 (1080p).mp4'
import Typist from "react-typist";
import './cover.css'

import email from '../assets/Svgs/email.png'
import github from '../assets/Svgs/github.png'
import linkedin from '../assets/Svgs/linkedin.png'
import facebook from '../assets/Svgs/facebook.png'
import whatsapp from '../assets/Svgs/whatsapp.png'

const Videocontainer = styled.section`
width: 100%;
height: 100vh;
position: relative;


video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}



`

const DarkOverlay = styled.div`

position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
`

const Title = styled.div`

position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;  


color: ${props => props.theme.text};

h1{
    font-family: 'kaushan Script';   
    font-size: ${props => props.theme.fontxxl};
    text-shadow: 2px 1px 1px ${props => props.theme.body};

    @media (max-width: 30em){
         font-size: ${props => props.theme.fontxl};
         
    }
}

span{
    font-family: "Sirin Stencil";
    font-size: ${props => props.theme.fontxl};
    text-shadow: 2px 1px 1px ${props => props.theme.body};
    text-transform: capitalize;
    font-weight: 200;
   
}
`




const CoverVideo = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        console.log("Count: " + count);
        setCount(1);
    }, [count]);
    return (
        <Videocontainer id="home">
            <DarkOverlay></DarkOverlay>


            <Title>
                <div>
                    <h1 data-scroll data-scroll-speed="4">Hello,I'm</h1>
                </div>

                <div>

                    <h1 data-scroll data-scroll-speed="4">SHAHARIAR BHUIYAN</h1>
                </div>

                <div>
                    {count ? (
                        <Typist avgTypingDelay={200} onTypingDone={() => setCount(0)}>

                            <span data-scroll data-scroll-speed="4">full stack web developer</span>

                        </Typist>
                    ) : (
                        ""
                    )}
                </div>

                <div>
                    <div class="wrapper">
                        <div class="buttona"> <a href="https://drive.google.com/file/d/1ZTLOttRQHvrMIgKf2UWXYqCIWQuD5j0b/view?usp=sharing" target="_blank"><span>View resume</span></a></div>
                    </div>



                </div>


                <div class="wrapper tabled">
                    <div class="stage" id="page1">
                        <div class="middled">
                            <div class="link-2">
                                <a href="mailto:sr.raghib@gmail.com" target="_blank">
                                    <img class="thin thick" src={email} alt="" />
                                </a>
                                <a href="https://github.com/shahariarraghib" target="_blank">
                                    <img class="thin thick" src={github} alt="" />
                                </a>
                                <a href="https://www.linkedin.com/in/shahariar-bhuiyan-2a6b04130/" target="_blank">
                                    <img class="thin thick" src={linkedin} alt="" />
                                </a>

                                <a href="https://www.facebook.com/shahariar.raghib/" target="_blank">
                                    <img class="thin thick" src={facebook} alt="" />
                                </a>

                                <a href="https://wa.me/01689797288" target="_blank">
                                    <img class="thin thick" src={whatsapp} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </Title>

            <video src={video} type="video/mp4" autoPlay muted loop></video>
        </Videocontainer>
    );
};

export default CoverVideo;