import React from 'react';
import Figura1 from '../../assets/figura1.png';
import Figura2 from '../../assets/figura2.png';
import Figura3 from '../../assets/figura3.png';
import Figura4 from '../../assets/figura4.png';
import Figura5 from '../../assets/figura5.png';
import Figura6 from '../../assets/figura6.png';
import {
  Div,
  Titulo,
  Divider,
  Container,
  ServicesGrid,
  ServiceRow,
  Service,
  ServiceIcon,
  ServiceContent,
  ServiceTitle,
  ServiceDescription
} from './styles';

export const Session = () => {
  const services = [
    {
      icon: Figura1,
      title: "Escolha uma campanha",
      description: "Navegue por diversas campanhas e escolha aquela que mais combina com você."
    },
    {
      icon: Figura2,
      title: "Faça sua doação",
      description: "Escolha o valor que deseja contribuir e complete o processo de forma segura."
    },
    {
      icon: Figura3,
      title: "Pagamento seguro",
      description: "Utilizamos os mais modernos métodos de pagamento para sua segurança."
    },
    {
      icon: Figura4,
      title: "Acompanhe o impacto",
      description: "Receba atualizações sobre como sua doação está fazendo a diferença."
    },
    {
      icon: Figura5,
      title: "Compartilhe",
      description: "Incentive outras pessoas a participar compartilhando nas redes sociais."
    },
    {
      icon: Figura6,
      title: "Progresso em tempo real",
      description: "Acompanhe o desenvolvimento da campanha e veja a comunidade se unindo."
    }
  ];

  return (
    <Div>
      <Titulo>Como Funciona?</Titulo>
      <Divider />
      <Container>
        <ServicesGrid>
          <ServiceRow>
            {services.map((service, index) => (
              <Service key={index}>
                <ServiceIcon src={service.icon} alt={service.title}/>
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceContent>
              </Service>
            ))}
          </ServiceRow>
        </ServicesGrid>
      </Container>
    </Div>
  );
};