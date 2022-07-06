import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../Components/CoverVideo';
import NavBar from '../Components/NavBar';


const Section = styled.section`

position: relative;
min-height: 100vh;
overflow: hidden;

`
const Home = () => {
    return (

        <Section>
            <CoverVideo></CoverVideo>
            {/* <h1>logo</h1> */}
            <NavBar></NavBar>
        </Section>

    );
};

export default Home;