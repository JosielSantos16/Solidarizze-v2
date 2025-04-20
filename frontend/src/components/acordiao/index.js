import React from 'react';
import { Accordion as SzAccordion, AccordionItem } from '@szhsin/react-accordion';
import { Title, Description, StyledAccordion, Container } from './styles';
import { FiChevronDown } from 'react-icons/fi';

export function CustomAccordion() {
  return (
    <Container>
      <hr />
      <StyledAccordion>
        <Title>Perguntas Frequentes (FAQ)</Title>
        <Description>
          Aqui você encontra respostas para as dúvidas mais comuns sobre nossos serviços.
          Se não encontrar o que procura, entre em contato com nosso suporte. Estamos
          sempre prontos para ajudar!
        </Description>
        <SzAccordion>
          <AccordionItem 
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>1. Como posso contribuir para as campanhas?</span>
                <FiChevronDown style={{ transition: 'transform 0.3s ease' }} />
              </div>
            }
          >
            Você pode contribuir clicando nas imagens das campanhas para obter mais informações e seguir as instruções para doação. Cada campanha tem detalhes específicos sobre como você pode ajudar.
          </AccordionItem>
          
          <AccordionItem 
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>2. Para onde vai o dinheiro arrecadado?</span>
                <FiChevronDown style={{ transition: 'transform 0.3s ease' }} />
              </div>
            }
          >
            O dinheiro arrecadado é utilizado diretamente para os fins descritos em cada campanha, como resgate de animais abandonados ou a criação de hortas comunitárias. Relatórios de transparência são disponibilizados periodicamente.
          </AccordionItem>
          
          {/* Adicione os demais itens seguindo o mesmo padrão */}
          <AccordionItem 
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>3. Posso contribuir com algo além de dinheiro?</span>
                <FiChevronDown style={{ transition: 'transform 0.3s ease' }} />
              </div>
            }
          >
            Sim, algumas campanhas aceitam doações de materiais ou trabalho voluntário. Verifique os detalhes de cada campanha para mais informações.
          </AccordionItem>
          
          <AccordionItem 
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>4. Como posso acompanhar o progresso das campanhas?</span>
                <FiChevronDown style={{ transition: 'transform 0.3s ease' }} />
              </div>
            }
          >
            O progresso das campanhas é atualizado regularmente em nosso site. Você pode verificar o status atualizado e quanto ainda falta para atingir a meta.
          </AccordionItem>
          
          <AccordionItem 
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>5. As doações são dedutíveis nos impostos?</span>
                <FiChevronDown style={{ transition: 'transform 0.3s ease' }} />
              </div>
            }
          >
            Dependendo da legislação local, algumas doações podem ser dedutíveis. Recomendamos consultar um contador para obter informações específicas sobre deduções fiscais.
          </AccordionItem>
          
          <AccordionItem 
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>6. O que acontece se uma campanha não atingir a meta?</span>
                <FiChevronDown style={{ transition: 'transform 0.3s ease' }} />
              </div>
            }
          >
            Se uma campanha não atingir a meta, os fundos arrecadados ainda serão utilizados para o propósito da campanha, embora possamos precisar ajustar o escopo do projeto.
          </AccordionItem>
          
          <AccordionItem 
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>7. Como posso entrar em contato para mais informações?</span>
                <FiChevronDown style={{ transition: 'transform 0.3s ease' }} />
              </div>
            }
          >
            Você pode entrar em contato conosco através do formulário de contato em nosso site ou pelo e-mail fornecido na página de cada campanha.
          </AccordionItem>
        </SzAccordion>
      </StyledAccordion>
    </Container>
  );
}