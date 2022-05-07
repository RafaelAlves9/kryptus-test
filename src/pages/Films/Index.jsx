import { useEffect, useState } from 'react';
import { Section } from '../../components/GlobalStyled';
import { Container } from '@mui/material';
import { ContentFilms } from './styled';
import { Card } from './components/Card';
import axios from 'axios';

export const Films = () => {
    const [api, setApi] = useState();

    useEffect(() => {
        if(!localStorage.getItem("api")){
            axios.get('https://swapi.dev/api/films')
            .then(res => {
                localStorage.setItem("api", JSON.stringify(res.data.results))
                setApi(JSON.parse(localStorage.getItem("api")))
            })
        } else setApi(JSON.parse(localStorage?.getItem("api")))
    }, [])

    return (
        <Section>
            <Container>
                <h2 style={{margin:"20px 0 10px 0"}}>Clique e saiba mais sobre os filmes!</h2>
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