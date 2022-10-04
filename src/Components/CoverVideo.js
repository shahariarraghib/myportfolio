import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import './cover.css'
import Typed from "react-typed";
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
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

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

                        <div className='typedStyle'>
                            <Typed

                                strings={["full stack web developer"]}
                                typeSpeed={100}
                                backSpeed={100}
                                loop
                            />
                        </div>
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

            {/* <video src={video} type="video/mp4" autoPlay muted loop></video> */}


            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {

                        color: {
                            value: "#000000",

                        },
                    },



                    fullScreen: false,

                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.5,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "triangle",
                        },
                        size: {
                            value: { min: 3, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

        </Videocontainer>
    );
};

export default CoverVideo;