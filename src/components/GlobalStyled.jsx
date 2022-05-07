import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    :root{
        --color-1: #FCDE2A;
        --color-2: #DF1B1B;
        --color-3: #F2F2F2;
        --color-4: #0C1C35;
        --color-5: #192F58;
        --transparente: rgba(255, 255, 255, 0);

        --font-1: 'Roboto', sans-serif;
    }
    h1{
        font-size: 2rem;
    }
    h2{
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
    }
`
export const Section = styled.section`
    width: 100%;
    height: 100vh;
    color: #fff;
    background: linear-gradient(to right top, #000 20%, var(--color-4) 100%);
    display: flex;
    align-items: center;
    text-align: center;

    @media(max-width:900px){
        height: fit-content;
        min-height: 100vh;
        align-items: flex-start;
    }
`