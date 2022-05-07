import styled from 'styled-components';

export const CardFilm = styled.div`
    max-width: 500px;
    width: 90%;
    height: 50px;
    margin: 10px 0;
    background-color: var(--color-3);
    overflow: hidden;
    z-index: 9;
    transition: all ease-in-out .2s;
    cursor: pointer;
    color: var(--color-4);
    font-weight: 700;
    font-family: var(--font-1);

    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        transition: all ease-in-out .3s;
        transform: scale(1.1);
        z-index: 99;
    }
`