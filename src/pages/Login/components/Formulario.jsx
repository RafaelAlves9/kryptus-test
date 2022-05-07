import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, TitlleForm, InputForm, Button } from './StyledForm';
import { useAuth } from '../../../services/useContext';
import { Alert } from '@mui/material';

export const Formulario = () => {
    //valores dos inputs
    const [userValue, setUserValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    //estado de erro dos inputs
    const [errorForm, setErrorForm] = useState(null);
    //estado global do login
    const {setSigned} = useAuth()
    //direcionamento para página Filmes
    const navigate = useNavigate()
    //variáveis de ambiente
    const usuario = "admin";
    const senha = "admin123!";
    //validação dos inputs
    function checkForm(e){
        e.preventDefault()
        if (userValue !== usuario | passwordValue !== senha){
            setErrorForm(true)
        }else {
            setErrorForm(false)
            setSigned(true)
        }
    }
    //executando validação e movendo para página filmes
    function getAcess(){
        if (errorForm === false){
            navigate("/filmes")
        }
    }
    
    return(
        <FormContainer>
            <TitlleForm>Faça o login</TitlleForm>
            <form onSubmit={getAcess()}>
                <InputForm name='user' type='text' placeholder='Usuário' value={userValue} onChange={(e) => setUserValue(e.target.value)} />
                <InputForm name='password' type='password' placeholder='Senha' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}/>

                <Button type='submit' onClick={e => checkForm(e)}>Login</Button>

                {errorForm && (<Alert sx={{ p:'0 30px', m:'20px 0' }} variant="filled" severity="error">Usuário ou Senha incorretos</Alert>)}
            </form>
        </FormContainer>
    )
}