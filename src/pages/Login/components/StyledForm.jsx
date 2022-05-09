import styled from "styled-components";

export const FormContainer = styled.h1`
    width: 95%;
    max-width: 400px;
    height: 450px;
    padding: 10px 0;
    border: 2px solid var(--color-1);
    background-color: #000;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const TitlleForm = styled.h1`
    padding: 30px 0 40px 0;
`
export const InputForm = styled.input`
    width: 90%;
    height: 50px;
    margin: 7px 0;
    padding: 0 10px;
    border: none;
    box-sizing: border-box;
    border-radius: 30px;
    outline: none;
    background-color: #fff;
    transition: all ease-in-out .2s;
    cursor: pointer;

    :focus{
        background-color: var(--color-3);
        outline: 3px solid var(--color-1);
        transition: all ease-in-out .2s;
    }
`
export const Button = styled.button`
    width: 150px;
    height: 50px;
    margin: 40px 0 0 0;
    border: 2px solid var(--color-1);
    background-color: var(--transparente);
    border-radius: 30px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;

    :hover{
        border: 2px solid #fff;
        transition: all ease-in-out .2s;
    }
    :active{
        background-color: #fff;
        color: var(--color-1);
    }
`
export const Error = styled.p`
    color: red;
`