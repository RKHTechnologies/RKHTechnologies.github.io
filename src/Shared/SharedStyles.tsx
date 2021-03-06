import styled from "styled-components";

export type Colour = 'light' | 'dark' | 'primary' | 'secondary' | 'green' | 'gold' | 'darkGreen' | 'lightGreen' | 'grey80' | 'grey60' | 'grey40' | 'grey20' | 'grey80';

interface ColoursProps {
    light: string,
    dark: string,
    primary: string,
    secondary: string,
    green: string,
    gold: string,
    darkGreen: string,
    lightGreen: string,
    grey80: string,
    grey60: string,
    grey40: string,
    grey20: string,
    grey5: string,
}

export const colours: ColoursProps = {
    light: "#FFFFFF",
    dark: "#000000",
    primary: "#257841",
    secondary: "#CBB62C",        
    green: "#257841",
    gold: "#CBB62C",
    darkGreen: "#133D22",
    lightGreen: "#226C3B",

    grey80: "#333333",
    grey60: "#666666",
    grey40: "#999999",
    grey20: "#CCCCCC",
    grey5: "#F2F2F2",
}


interface SettingsProps {
    maxWidth: string;
    maxWidthHalf: string;
    mobile: string;
}

export const SharedSettings: SettingsProps = {
    maxWidth: "1400px",
    maxWidthHalf: "700px",
    mobile: "1100px",
}

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const PageBodyContainer = styled.div`
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  /* overflow-y: scroll; */
`;


interface SectionProps {
    dark?: boolean;
  }

export const SectionContainer = styled.div`
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: ${(p: SectionProps) => p.dark ? colours.dark : colours.light};
  color: ${(p: SectionProps) => p.dark ? colours.light : colours.dark};

  h1 {
    font-size: 3em;
    font-weight: 200;
    margin-top: 100px;
  }

  p {
      font-size: 1.8em;
  }
`;