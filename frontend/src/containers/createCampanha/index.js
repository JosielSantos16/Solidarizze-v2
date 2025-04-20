import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import api from "../../services/api";
import { toast } from 'react-toastify';

import {
  Container,
  ContainerItens,
  Label,
  Input,
  TextArea,
  P,
  ErrorMessage,
  ButtonContainer, 
  ContainerButton,
  FileInput,
  Select
} from "./styles";
import Header from "../../components/Header";

const schema = Yup.object().shape({
  title: Yup.string().required('O nome da campanha é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  goal_amount: Yup.number()
    .required('A meta de arrecadação é obrigatória')
    .positive('A meta deve ser um valor positivo'),
  end_date: Yup.date()
    .required('A data de término é obrigatória')
    .min(new Date(), 'A data de término deve ser no futuro'),
  category_id: Yup.number()
    .required('Selecione uma categoria')
    .positive()
});

export function Campanha() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get('/categories');
        setCategories(response.data);
        setIsLoading(false);
      } catch (error) {
        toast.error('Erro ao carregar categorias');
        console.error("Erro ao carregar categorias:", error);
      }
    }
    loadCategories();
  }, []);

  const onSubmit = async campaignData => {
    const formData = new FormData();
  
    Object.keys(campaignData).forEach(key => {
      formData.append(key, campaignData[key]);
    });
  
    if (file) {
      formData.append('file', file);
    }
  
    const token = localStorage.getItem('token'); 
  
    try {
      await toast.promise(
        api.post('campaigns', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        }),
        {
          pending: 'Criando sua campanha...',
          success: 'Campanha criada com sucesso!',
          error: 'Erro ao criar campanha, tente novamente'
        }
      );
  
      navigate("/admin/vaquinhas");
    } catch (error) {
      console.error("Erro detalhado:", error.response?.data || error.message);
    }
  };
  

  const handleExit = () => {
    navigate("/"); 
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Header/>
      <Container>
        <ContainerItens>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <h1><b>Crie sua campanha</b></h1>
            <P>Cadastre-se agora e inicie sua campanha para arrecadar fundos com facilidade!</P>

            <Label>Nome da campanha</Label>
            <Input {...register("title")} type="text" placeholder="Digite o nome da campanha" />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>

            <Label>Meta de arrecadação</Label>
            <Input {...register("goal_amount")} type="number" placeholder="Digite a meta de arrecadação" />
            <ErrorMessage>{errors.goal_amount?.message}</ErrorMessage>

            <Label>Data de término</Label>
            <Input {...register("end_date")} type="date" />
            <ErrorMessage>{errors.end_date?.message}</ErrorMessage>

            <Label>Categoria</Label>
            {isLoading ? <p>Carregando categorias...</p> : (
              <Select {...register("category_id")}>
                <option value="">Selecione uma categoria</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </Select>
            )}
            <ErrorMessage>{errors.category_id?.message}</ErrorMessage>

            <Label>Imagem</Label>
            <FileInput type="file" onChange={handleFileChange} accept="image/*" />

            <Label>Descrição</Label>
            <TextArea {...register("description")} placeholder="Descreva sua campanha" />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            <ButtonContainer>
              <ContainerButton type="button" onClick={handleExit} red>Sair</ContainerButton>
              <ContainerButton type="submit">Criar campanha</ContainerButton>
            </ButtonContainer>
          </form>
        </ContainerItens>
      </Container>
    </>
  );
}
