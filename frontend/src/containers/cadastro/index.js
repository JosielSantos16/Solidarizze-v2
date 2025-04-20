import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import api from "../../services/api";
import { toast } from 'react-toastify';
import { useUser } from "../../hooks/userContext";
import {
    Container,
    ContainerItens,
    Label,
    Input,
    SignInLink,
    P,
    ErrorMessage
} from "./styles";
import Header from "../../components/Header";

const schema = Yup.object().shape({
    name: Yup.string().required('Seu nome é obrigatório'),
    cpf: Yup.string()
        .required('Seu CPF é obrigatório')
        .length(11, 'Seu CPF deve conter 11 dígitos')
        .matches(/^\d+$/, 'Seu CPF deve conter apenas números'),
    email: Yup.string().required('Seu email é obrigatório').email('Email inválido'),
    password: Yup.string()
        .required('Sua senha é obrigatória')
        .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: Yup.string()
        .required('Confirme sua senha')
        .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
});

export function Cadastro() {
    const navigate = useNavigate();
    const { putUserData } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (clientData) => {
        try {
            const res = await toast.promise(
                api.post("users", {
                    name: clientData.name,
                    cpf: clientData.cpf,
                    email: clientData.email,
                    password: clientData.password,
                }),
                {
                    pending: "Criando sua conta...",
                    success: "Conta criada com sucesso!",
                    error: "Usuário já existe!",
                }
            );

            await putUserData({
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                token: res.data.token || null
            });

            localStorage.setItem("token", res.data.token);

            navigate("/campanha");
        } catch (error) {
            console.error("Erro ao criar conta:", error.response?.data || error);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <ContainerItens>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1><b>Cadastre-se</b></h1>
                        <P>Crie sua conta e comece a arrecadar fundos para sua campanha!</P>

                        <Label>Nome</Label>
                        <Input placeholder="Digite seu nome completo" {...register("name")} type="text" error={errors.name?.message} />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>

                        <Label>CPF</Label>
                        <Input placeholder="Seu CPF" {...register("cpf")} type="text" error={errors.cpf?.message} />
                        <ErrorMessage>{errors.cpf?.message}</ErrorMessage>

                        <Label>Email</Label>
                        <Input placeholder="Digite seu Email" {...register("email")} type="email" error={errors.email?.message} />
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>

                        <Label>Senha</Label>
                        <Input placeholder="Sua senha" {...register("password")} type="password" error={errors.password?.message} />
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>

                        <Label>Confirmar senha</Label>
                        <Input placeholder="Confirme sua senha" {...register("confirmPassword")} type="password" error={errors.confirmPassword?.message} />
                        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                        <Button style={{ marginTop: 50 }} type="submit">Criar conta</Button>

                        <SignInLink>
                            Já tem uma conta? <Link to="/login">Entrar</Link>
                        </SignInLink>
                    </form>
                </ContainerItens>
            </Container>
        </>
    );
}
