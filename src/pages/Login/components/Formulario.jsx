import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer, TitlleForm, InputForm, Button } from './StyledForm';
import { useAuth } from '../../../components/useContext';
import { Alert } from '@mui/material';

export const Formulario = () => {
    //valores dos inputs
    const [userValue, setUserValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    //estado dos erros dos inputs
    const [errorUser, setErrorUser] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    //estado global do login
    const {setSigned} = useAuth()
    const navigate = useNavigate()

    const usuario = "admin";
    const senha = "admin123!";

    //validação dos inputs
    function checkForm(e){
        e.preventDefault()
        if (userValue !== usuario) setErrorUser(true)
        else {
            setErrorUser(false)
            if(passwordValue !== senha) setErrorPassword(true)
            else setErrorPassword(false)
        }
    }
    //executando validação e movendo para próxima página
    function getAcess(){
        if(errorUser === false && errorPassword === false){
            setSigned(true)
            navigate('/filmes')
        } else return
    }
    
    return(
        <FormContainer>
            <TitlleForm>Faça o Login</TitlleForm>
            <form onSubmit={getAcess()}>
                <InputForm name='user' type='text' placeholder='Usuário' value={userValue} onChange={(e) => setUserValue(e.target.value)} />
                {errorUser && (<Alert sx={{ p:'0 30px' }} variant="filled" severity="error">Usuário não encontrado</Alert>)}

                <InputForm name='password' type='password' placeholder='Senha' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}/>
                {errorPassword && (<Alert sx={{ p:'0 30px' }} variant="filled" severity="error">Senha incorreta</Alert>)}

                <Button type='submit' onClick={e => checkForm(e)}>Login</Button>
            </form>
        </FormContainer>
    )
}