import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useLocomotiveScroll } from 'react-locomotive-scroll';





const NavBarContainer = styled(motion.div)`
width: 100vw;
z-index: 6;
position: absolute;
top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s ease;

@media (max-width: 40em){
    
   top: ${props => props.click ? '0' : `calc(-50vh -4rem)`};

}

`
const MenueItems = styled(motion.ul)`
position: relative;
height: ${props => props.theme.navHeight};
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;


display: flex;
justify-content: space-around;
align-items: center;

width: 100%;
padding: 0 10rem;


@media (max-width: 40em){
  flex-direction: row;
  padding: 2rem 0;
 
}

`

const Menubutton = styled(motion.li)`
background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
list-style.type: style none;
color: ${props => props.theme.body};
width: 15rem;
height: 2.5rem;
clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

 position: absolute;
 top: 100%;
 left: 50%;
 transform: translateX(-50%);

display: flex;
justify-content: center;
align-items: center;

 font-size: ${props => props.theme.fontlg};
 font-weight: 600;
 text-transform: uppercase;
 cursor: pointer;

@media (max-width: 40em){
  width: 10rem;
  height: 2rem;
}

`

const MenuItem = styled.li`
text-transform: uppercase;
color: ${props => props.theme.text};
cursor: pointer;


`

const NavBar = () => {
    const [click, setClick] = useState(false)

    const { scroll } = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);
        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0.0, 0.35, 1.0]
            }

        )
    }

    return (
        <NavBarContainer click={click}
            initial={{
                y: '-100%'
            }}

            animate={{
                y: 0
            }}

            transition={{
                duration: .50, delay: .50
            }}
        >
            <MenueItems
                drag="y"
                dragConstraints={{
                    top: 0,
                    bottom: 70,
                }}

                dragElastic={0.05}
                dragSnapToOrigin
            >
                <Menubutton onClick={() => setClick(!click)}>Menu</Menubutton>
                {/* <MenuItem >Home</MenuItem > */}
                <MenuItem onClick={() => handleScroll('#about')}>about</MenuItem>
                <MenuItem onClick={() => handleScroll('#mywork')}>my works</MenuItem>
                <MenuItem onClick={() => handleScroll('#myskills')}>my skills</MenuItem>
                <MenuItem onClick={() => handleScroll('#contact')}>contact</MenuItem>
            </MenueItems>
        </NavBarContainer >
    );
};

export default NavBar;