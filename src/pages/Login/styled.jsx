import styled from "styled-components";

export const ContentHome = styled.section`
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        margin: 10px 0;
        max-width: 450px;
    }

    @media(max-width:900px){
       flex-direction: column;
       justify-content: start;
        img{
            max-width: 120px;
        }
    }
`