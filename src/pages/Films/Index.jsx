import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../components/GlobalStyled';
import { Container, Button } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { ContentFilms, LogoutButton } from './styled';
import { Card } from './components/Card';
import axios from 'axios';
import { useAuth } from '../../services/useContext'

export const Films = () => {
    const [api, setApi] = useState();
    const {setSigned, signed} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem("api")){
            axios.get('https://swapi.dev/api/films')
            .then(res => {
                localStorage.setItem("api", JSON.stringify(res.data.results))
                setApi(JSON.parse(localStorage.getItem("api")))
            })
        } else setApi(JSON.parse(localStorage?.getItem("api")))
    }, [signed])

    function LogoutLogin(){
        setSigned(false)
        navigate("/login")
    }

    return (
        <Section>
            <LogoutButton>
                <Button variant="outlined" onClick={() => LogoutLogin()}><Logout/>Logout</Button>
            </LogoutButton>
            <Container>
                <h2 style={{margin:"20px 0"}}>Clique e saiba mais sobre os filmes!</h2>
                <ContentFilms>
                   {api?.map((i) => (
                            <Card
                            key={i.episode_id}
                            title={i.title}
                            resum={i.opening_crawl}
                            director={i.director}
                            date={i.release_date}
                            producer={i.producer}
                            />
                        ))}
                </ContentFilms>
            </Container>
        </Section>
    )
}