import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop } from '../Shared/ImageLib';
import { colours, SharedSettings } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100vw;
  height: 2000px;
  overflow: hidden;
`;

const MainBackground = styled.div`
  width: 120vw;
  margin-left: -10%;
  margin-top: -10%;
  height: 130vh;
  background: rgb(37,120,65);
  background: linear-gradient(180deg, rgba(37,120,65,1) 0%, rgba(19,60,33,1) 100%);
  transform: rotate(8deg);
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

const Home: FC = () => {
  return (
    <Container>
      <Logo />

      <MainBackground>
      </MainBackground>

    </Container>
  );
}

export default Home;