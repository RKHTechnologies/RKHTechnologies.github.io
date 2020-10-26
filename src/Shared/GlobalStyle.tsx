import { createGlobalStyle } from "styled-components";
import { colours } from "./SharedStyles";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Orbitron', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        /* scroll-behavior: smooth; */
        font-weight: 900;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colours.secondary};
        border-radius: 20px;
    }
`;

export default GlobalStyle;