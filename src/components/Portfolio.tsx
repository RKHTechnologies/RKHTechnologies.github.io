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
`;

const SubHeader = styled.div`

`;

const Portfolio: FC = () => {
  return (
    <Container>
      <Header>Portfolio</Header>
      {/* <Header>Recent Projects</Header> */}
      {/* <Header>Projects</Header> */}
      

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