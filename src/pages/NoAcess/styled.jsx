import styled from 'styled-components';

export const ContainerNoAcess = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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