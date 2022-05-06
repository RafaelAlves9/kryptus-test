import styled from 'styled-components';

export const ContainerNoAcess = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    p{
        color: var(--color-3);
    }
    h3{
        color: var(--color-2);
        font-size: 1.3rem;
    }
    img{
        max-width: 300px;
        margin: 20px 0;
    }
`
export const ContentNoAcess = styled.div`
    max-width: 600px;
    width: 100%;
`