import { useEffect, useState } from 'react';
import { Section } from '../../components/GlobalStyled';
import { Container } from '@mui/material';
import { ContentFilms } from './styled';
import { Card } from './components/Card';
import axios from 'axios';

export const Films = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get('https://swapi.dev/api/films')
        .then(res => setInfo(res.data.results))
    }, []);

    return (
        <Section>
            <Container>
                <ContentFilms>
                   {info?.map((i) => (
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