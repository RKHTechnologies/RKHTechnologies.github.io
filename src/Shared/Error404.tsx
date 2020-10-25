import React from "react";
import { colours, PageContainer } from "../Shared/SharedStyles";
import logo from '../img/logo_surround.png';
import styled from "styled-components";

const Container = styled(PageContainer)`
  background: ${colours.primary};
  color: ${colours.secondary};
`;

const LogoContainer = styled.img`
  max-width: 400px;
`;

const Error404: React.FC = () => {
  return (
    <Container>
      <LogoContainer src={logo} alt="RKH Technologies Logo" />
      <h1>404 - Page not found</h1>
      <p>{`Current URL: "${window.location.pathname}"`}</p>
    </Container>
  );
};

export default Error404;
