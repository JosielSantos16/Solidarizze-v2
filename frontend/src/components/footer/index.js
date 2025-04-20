import React from 'react';
import { Container } from './styles.js';
import LogoImg from '../../assets/solidarizze.png';
import { SolidarizzeImg, ContainerImg, DivLinks, DivContatos, Display, FooterBottom } from './styles.js';

export const Footer = () => {
  return (
    <Container>
      <ContainerImg>
        <SolidarizzeImg src={LogoImg} alt="Solidarizze" />
      </ContainerImg>

      <Display>
        <DivLinks>
          <h1>Links Rápidos</h1>
          <ul>
            <li><a href="/quem-somos">Quem Somos</a></li>
            <li><a href="/vaquinhas">Vaquinhas</a></li>
            <li><a href="/criar-vaquinha">Criar Vaquinha</a></li>
            <li><a href="/politica-privacidade">Política de Privacidade</a></li>
            <li><a href="/termos-uso">Termos de Uso</a></li>
          </ul>
        </DivLinks>

        <DivContatos>
          <h1>Contato</h1>
          <p>Email: josielufopa@gmail.com</p>
          <p>Telefone: +5593992457354</p>
          <p>Endereço: Oriximiná - Pará</p>
        </DivContatos>
      </Display>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Solidarizze. Todos os direitos reservados.</p>
      </FooterBottom>
    </Container>
  );  
};

