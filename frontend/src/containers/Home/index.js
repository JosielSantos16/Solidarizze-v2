import React from "react";
import LogoImg from '../../assets/solidarizze.png';
import { Link } from "react-router-dom";
import { CampanhasCarousel, Divider, Session, DividerBottomLeft, How, CustomAccordion, Footer, Button, Header } from "../../components";
import { useUser } from "../../hooks/userContext";
import {
    Banner,
    SolidarizzeImg,
    Descricao,
    Introducao,
    Titulo,
    Description,
    ContainerDivider,
    BannerButton 
} from './styles';

export function Home() {
    const { isAuthenticated } = useUser();
    
    return (
        <>
            <Header/>
            <Banner>
                <SolidarizzeImg src={LogoImg} alt="Solidarizze" />
                <Descricao>Incentivando Caridade Através da Tecnologia</Descricao>
                <Link to={isAuthenticated ? "/campanha" : "/cadastro"}>
                <BannerButton className="banner-button">Criar campanha</BannerButton>

                </Link>
            </Banner>

            <Introducao>
                <Titulo>Bem-vindo</Titulo>
                <Description>
                    A solidariedade é essencial para um futuro melhor, e a tecnologia pode amplificar nossas ações.
                    Com ela, podemos criar campanhas de arrecadação e unir pessoas para fazer a diferença na vida de quem precisa.
                    Junte-se a nós para transformar vidas e construir um mundo mais justo.
                </Description>
            </Introducao>

            <CampanhasCarousel />

            <ContainerDivider>   
                <Session/>
                <How/>
                <CustomAccordion/>
                <Footer/>
            </ContainerDivider>
        </>
    );
}