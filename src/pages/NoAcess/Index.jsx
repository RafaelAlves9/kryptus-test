import { Link } from 'react-router-dom';
import { Section } from '../../components/GlobalStyled';
import { ContainerNoAcess } from './styled';
import Gif from '../../components/src/gif.gif';

export const NoAcess = () => {

    return (
        <Section>
            <ContainerNoAcess>
                <h3>Você ainda está do lado sombrio da Força!</h3>
                <Link to="/login"><p>Clique aqui e faça login</p></Link>
                <img src={Gif} alt="gif star wars"/>
            </ContainerNoAcess>
        </Section>
    )
}