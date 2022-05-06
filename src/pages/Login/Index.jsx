import { Formulario } from './components/Formulario';
import { ContentHome } from './styled';
import { Container } from '@mui/material';
import { Section } from '../../components/GlobalStyled'

import StartWars from '../../components/images/logo.webp'

export const Login = () => {

    return(
        <Section>
            <Container sx={{ height:'100%' }}>
                <ContentHome>
                    <img src={StartWars} alt="logo star wars" />
                    <Formulario />
                </ContentHome>
            </Container>
        </Section>
    )
}