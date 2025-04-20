import React from "react";
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import api from "../../services/api";
import { toast } from 'react-toastify';
import { useUser } from "../../hooks/userContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  ContainerItens,
  Label,
  Input,
  SignUpLink,
  P,
  ErrorMessage,
} from "./styles";
import Header from "../../components/Header";

const schema = Yup.object().shape({
  email: Yup.string().required('Seu email é obrigatório').email('Email inválido'),
  password: Yup.string().required('Sua senha é obrigatória')
});

export function Login() {
  const { putUserData } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async clientData => {
    try {
      const { data } = await toast.promise(
        api.post('sessions', {
          email: clientData.email,
          password: clientData.password
        }),
        {
          pending: 'Verificando seus dados...',
          success: 'Seja bem-vindo(a)!',
          error: 'Verifique seu email e senha'
        }
      );

      putUserData(data);

      const from = location.state?.from || { pathname: "/campanha" };
 
      navigate(from.pathname, { 
        replace: true,
        state: { from: undefined } 
      });

    } catch (error) {
      console.error("Erro na requisição:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <Header/>
      <Container>
        <ContainerItens>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1><b>Entrar</b></h1>
            <P>Faça login para acessar sua conta e gerenciar suas campanhas!</P>

            <Label>Email</Label>
            <Input 
              placeholder="Digite seu email" 
              {...register("email")} 
              type="email" 
              error={errors.email?.message} 
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Senha</Label>
            <Input 
              placeholder="Sua senha" 
              {...register("password")} 
              type="password" 
              error={errors.password?.message} 
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Button style={{ marginTop: 30 }} type="submit">Entrar</Button>

            <SignUpLink>
              Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
            </SignUpLink>
          </form>
        </ContainerItens>
      </Container>
    </>
  );
}