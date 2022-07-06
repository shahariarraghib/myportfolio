import React from 'react';
import styled from 'styled-components';


const Section = styled.section`


min-height: 10vh;
width: 99vw;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

small{
    font-weight: 600;
    font-size: ${props => props.theme.fontlg};
}
`

const Footer = () => {
    return (
        <Section >
            <small>Copyright © 2022 - All right reserved by Shahariar Bhuiyan</small>
        </Section>
    );
};

export default Footer;