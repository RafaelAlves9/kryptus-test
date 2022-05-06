import { Link } from 'react-router-dom';
import { Section } from '../../components/GlobalStyled';
import { ContainerNoAcess, ContentNoAcess } from './styled';
import Gif from '../../components/src/cry.gif';

export const NoAcess = () => {

    return (
        <Section>
            <ContainerNoAcess>
                <ContentNoAcess>
                    <h3>Você ainda está do lado sombrio da Força!</h3>
                    <Link to="/login"><p>Clique aqui e faça Login para de ter acesso ao conteúdo</p></Link>
                    <img src={Gif} alt="gif"/>
                </ContentNoAcess>
            </ContainerNoAcess>
        </Section>
    )
}