import React from 'react';
import {
  HowContainer,
  StepsContainer,
  Step,
  StepContent,
  StepTitle,
  StepDescription,
  StepIcon
} from './styles';
import { FiPlusCircle, FiShare2, FiDollarSign } from 'react-icons/fi';

export const How = () => {
  const steps = [
    {
      icon: <FiPlusCircle size={24} />,
      title: "Crie sua Campanha",
      description: "Crie uma vaquinha online de forma rápida e fácil para ajudar uma causa, uma pessoa ou realizar um projeto especial."
    },
    {
      icon: <FiShare2 size={24} />,
      title: "Divulgue e Compartilhe",
      description: "Compartilhe sua campanha com amigos, familiares e nas redes sociais para alcançar o maior número de pessoas possível."
    },
    {
      icon: <FiDollarSign size={24} />,
      title: "Saque Simples e Rápido",
      description: "Atingindo ou não a meta, o dinheiro arrecadado pode ser sacado de forma rápida e fácil para uma conta bancária."
    }
  ];

  return (
    <HowContainer>
      <h2>Como Funciona?</h2>
      <p className="subtitle">É simples, rápido e seguro</p>
      
      <StepsContainer>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIcon>{step.icon}</StepIcon>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepContent>
          </Step>
        ))}
      </StepsContainer>
    </HowContainer>
  );
};