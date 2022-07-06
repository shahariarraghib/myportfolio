import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
min-height: 70vh;
width: 99vw;
margin: 5rem auto;
position: relative;

overflow: hidden;
width: 80vw;
display: flex;

li{
   margin-left: 2rem; 
   margin-top: 1rem;
}
@media (max-width: 30em){
  
  flex-direction: column;

  min-height: 120vh;
    
}

`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
font-family: 'kaushan Script'; 
font-weight: 300; 
position: absolute;
top: 3rem;

z-index: 5; 



`
const LeftPart = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 800;
position: relative;
z-index: 5; 
top: 10rem;

`


const RightPart = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 800;
position: relative;
z-index: 5;
top: 10rem;


`

const MySkills = () => {

    return (
        <div id='myskills'>
            <Section id="fixed-target ">
                <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                    My Skills
                </Title>

                {/* <MainPart> */}
                <LeftPart data-scroll data-scroll-sticky data-scroll-target="#fixed-target">


                    <ul>
                        <h2>Language</h2>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>


                        <h2>Library / Frameworks</h2>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Bootstrap</li>
                        <li>Material Ui</li>
                        <li>TailwindCSS</li>

                    </ul>



                </LeftPart>

                <RightPart data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
                    <ul>
                        <h2>Other Technologies</h2>
                        <li>MongoDB</li>



                        <h2>Tools</h2>
                        <li>Firebase</li>
                        <li>GitHub</li>

                    </ul>
                </RightPart>
                {/* </MainPart> */}


            </Section >
        </div>
    );
};

export default MySkills;