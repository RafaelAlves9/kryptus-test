import styled from "styled-components";

export const ContentHome = styled.section`
    width: 100%;
    height: 100%;
    padding: 50px 0;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        margin: 20px 0;
        max-width: 450px;
    }

    @media(max-width:900px){
        padding: 0 0;
        flex-direction: column;
        justify-content: start;

        img{
            max-width: 120px;
        }
    }
`