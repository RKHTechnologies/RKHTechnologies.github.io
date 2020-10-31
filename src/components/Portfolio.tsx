import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-start;
`;

const Header = styled.h1`
  color: ${colours.secondary};
  font-size: 4em;
  font-weight: 900;
  text-transform: uppercase;
  color: #cbb62c;
  text-shadow: 3px 5px 7px #133d21;
  letter-spacing: 6px;
  margin-bottom: 30px;
`;

const SubHeader = styled.div`
  color: #e5e5e5;
  font-family: 'montserrat';
  font-weight: 100;
  font-size: 1.2em;
  
`;

const Portfolio: FC = () => {
  return (
    <Container>
      <Header>Portfolio</Header>
      {/* <Header>Recent Projects</Header> */}
      {/* <Header>Projects</Header> */}
      <SubHeader>We design and build creative, responsive and engaging designs. Select below to view some of our recent projects.</SubHeader>
      
    </Container>
  );
}

export default Portfolio;

// font-size: 4em;
//     font-weight: 900;
//     text-transform: uppercase;
//     /* background: linear-gradient(126deg, rgb(152 152 152) 0%, rgb(226 226 226) 100%); */
//     -webkit-background-clip: text;
//     /* -webkit-text-fill-color: transparent; */
//     -webkit-box-decoration-break: clone;
//     color: #cbb62c;
//     text-shadow: 3px 5px 7px #133d21;
//     letter-spacing: 6px;