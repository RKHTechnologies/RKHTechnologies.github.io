import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop } from '../Shared/ImageLib';
import { colours, SharedSettings } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100%;
  max-width: calc(100vw);
  height: 2000px;
  overflow: hidden;
`;

const MainBackground = styled.div`
  height: calc(100vh + 220px);
  width: calc(100vw + 200px);
  margin-top: -110px;
  margin-left: -100px;
  background: rgb(37,120,65);
  background: linear-gradient(180deg, rgba(37,120,65,1) 0%, rgba(19,60,33,1) 100%);
  transform: rotate(5deg);
`;


const SecondBackground = styled(MainBackground)`
  z-index: 1;
  background: linear-gradient(180deg, rgba(37,120,65,1) 0%, rgba(19,60,33,1) 100%);
  border-top: 5px solid ${colours.secondary};
  margin-top: 0;
  position: absolute;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 250px);
  background: lightblue;
  transform: rotate(-5deg);
  margin-top: 180px;
`;

const Logo = styled.div`
  width: 500px;
  height: 500px;
  background: black;
  position: fixed;
  top: calc(50% - 250px);
  left: calc(50% - 250px);
  border-radius: 50%;
  background: url(${ImagesDesktop['logoSurround']});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const Button = styled.div`
  padding: 12px 25px;
  box-sizing: border-box;
  border: 3px solid ${colours.secondary};
  color: ${colours.secondary};
  border-radius: 50px;
  position: absolute;
  top: 50px;
  right: 50px;
  font-weight: 900;
  font-size: 1.2em;
  letter-spacing: 4px;
  cursor: pointer;
  background: linear-gradient(to right, ${colours.secondary} 50%, transparent 50%);
  background-size: 200%;
  background-position: right;
  transition: all 0.3s ease;

  &:hover {
    background-position: left;
    color: ${colours.primary};
  }
`;

const Home: FC = () => {
  return (
    <Container>
      <Logo />
      <MainBackground />
      <Button>Contact</Button>  
      <SecondBackground>
        <Content>

        </Content>
      </SecondBackground>
      
    </Container>
  );
}

export default Home;