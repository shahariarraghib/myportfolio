import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import fourWheel from '../assets/Images/Four-Wheel.png'
import doctorPortal from '../assets/Images/Doctor-Portal.png'
import passageToPeace from '../assets/Images/Passage-To-Peace.png'
import covidcare from '../assets/Images/Covid-Care.png'

import './Myworks.css'

const Section = styled.section`

position: relative;
min-height: 100vh;
height: auto;
width: 99vw;
margin: -1 auto;
overflow: hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;

`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
font-family: 'kaushan Script'; 
font-weight: 300; 
color: ${props => props.theme.text};
position: absolute;
top: 5rem;
left: 8%;
z-index: 15;
text-shadow: 2px 1px 1px ${props => props.theme.body};

`
const LeftPart = styled.div`
width: 30%;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
min-height: 100vh;
font-weight: 300;
z-index: 5; 

position: fixed;
left: 0;

display: flex;
justify-content: center;
align-items: center;

p{
  font-size: ${props => props.theme.fontlg};  
  font-weight: 300;
  width: 80%;
  margin: 0 auto;
 

}

@media (max-width: 30em){
  word-wrap: break-word;
 
 
}
`

const RightSide = styled.div`
position: absolute;
background-color: ${props => props.theme.grey};
min-height: 100vh;
left: 30%;

padding-left: 35%;

display: flex;
justify-content: flex-start;
align-items: center;

h1{
    width: 5rem;
    margin: 0 2rem
}
`
const Item = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

width: 20rem;
margin-right: 6rem;

img{
    width: 100%;
    height: auto;
    cursor: pointer;

}

h1{
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
}
`

const Project = ({ img, title = ' ' }) => {

    return (
        <Item
        // initial={{ filter: 'grayscale(100%)' }}
        // whileInView={{ filter: 'grayscale(0%)' }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: false, amount: 'all' }}
        >
            <img src={img} alt="" />
            <h1>{title}</h1>
        </Item>
    )
}


const MyWorks = () => {
    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef(null);
    const horizontal = useRef(null);


    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = horizontal.current;
        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();
        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.app',
                    scrub: true,
                    pin: true,
                    // markers: true,

                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none,'
            })

            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.app',
                    scrub: true,

                    // markers: true,

                },
                x: -pinWrapWidth,
                ease: 'none,'
            })
            ScrollTrigger.refresh();

        }, 1000);

        return () => {

        };

    }, [])


    return (


        <div id='mywork'>
            <Section ref={ref} >
                <Title data-scroll data-scroll-speed="-1"> My Works </Title>
                <LeftPart>
                    <p>I would like to work in a position where I can effectively utilize and
                        improve my interpersonal communication skills along with problem
                        solving and analytical skills.</p>
                </LeftPart>

                <RightSide ref={horizontal}>





                    <div class="grid">

                        <figure class="effect-kira">
                            <Project img={fourWheel}></Project>
                            <figcaption>
                                <h2>Four<span>Wheel</span></h2>
                                <p>
                                    <div class="wrapper">
                                        <div class="buttona">
                                            <a href="https://four-wheel.firebaseapp.com/" target="_blank"><span>Live Preview</span></a>
                                        </div>
                                    </div>

                                    <div class="wrapper">
                                        <div class="buttona">
                                            <a href="https://github.com/shahariarraghib/Four-Wheel" target="_blank"><span>Source Code</span></a>
                                        </div>
                                    </div>

                                    <a href="#"></a>
                                    <a href="#"></a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>


                    <div class="grid">

                        <figure class="effect-kira">
                            <Project img={doctorPortal} title='abc'></Project>
                            <figcaption>
                                <h2>Doctor<span>Portal</span></h2>
                                <p>
                                    <div class="wrapper">
                                        <div class="buttona">
                                            <a href="https://doctor-portal-client-844f5.web.app/" target="_blank"><span>Live Preview</span></a>
                                        </div>
                                    </div>

                                    <div class="wrapper">
                                        <div class="buttona">
                                            <a href="https://github.com/shahariarraghib/doctor-portal-client" target="_blank"><span>Source Code</span></a>
                                        </div>
                                    </div>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="grid">

                        <figure class="effect-kira">
                            <Project img={passageToPeace} title='abc'></Project>
                            <figcaption>
                                <h2>Passage<span>To </span> <span> peace</span></h2>
                                <p>
                                    <div class="wrapper">
                                        <div class="buttona">
                                            <a href="https://passage-to-peace.firebaseapp.com/" target="_blank"><span>Live Preview</span></a>
                                        </div>
                                    </div>

                                    <div class="wrapper">
                                        <div class="buttona">
                                            <a href="https://github.com/shahariarraghib/passage-to-peace-website" target="_blank"><span>Source Code</span></a>
                                        </div>
                                    </div>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="grid">

                        <figure class="effect-kira">
                            <Project img={covidcare} title='abc'></Project>
                            <figcaption>
                                <h2>Covide <span>Care</span></h2>
                                <p>
                                    <div class="wrapper">
                                        <div class="buttona">
                                            <a href="https://covid-corner-login-system.web.app/" target="_blank"><span>Live Preview</span></a>
                                        </div>
                                    </div>

                                    <div class="wrapper">
                                        <div class="buttona">
                                            <a href="https://github.com/shahariarraghib/Covid_Care" target="_blank"><span>Source Code</span></a>
                                        </div>
                                    </div>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>



                    {/* <Project img={covidcare} title='abc'></Project>
                    <Project img={covidcare} title='abc'></Project>
                    <Project img={covidcare} title='abc'></Project>
                    <Project img={covidcare} title='abc'></Project>
                    <Project img={covidcare} title='abc'></Project>
                    <Project img={covidcare} title='abc'></Project>
                    <Project img={covidcare} title='abc'></Project>
                    <Project img={covidcare} title='abc'></Project> */}

                </RightSide>

            </Section>
        </div>


    );
};

export default MyWorks;