import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
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
  Select,
  ImagePreview,
} from "./styles";
import Header from "../../components/Header";

const schema = Yup.object().shape({
  title: Yup.string().required("O nome da campanha é obrigatório"),
  description: Yup.string().required("A descrição é obrigatória"),
  goal_amount: Yup.number()
    .required("A meta de arrecadação é obrigatória")
    .positive("A meta deve ser um valor positivo"),
  end_date: Yup.date()
    .required("A data de término é obrigatória")
    .min(new Date(), "A data de término deve ser no futuro"),
  category_id: Yup.number()
    .required("Selecione uma categoria")
    .positive("Categoria inválida"),
});

export function EditarCampanha() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const [file, setFile] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // 1) buscar categorias
        const catRes = await api.get("/categories");
        setCategories(catRes.data);

        // 2) se veio pelo state do navigate, já preenche
        if (location.state?.campaign) {
          const camp = location.state.campaign;
          setValue("title", camp.title);
          setValue("description", camp.description);
          setValue("goal_amount", camp.goal_amount);
          setValue(
            "end_date",
            new Date(camp.end_date).toISOString().split("T")[0]
          );
          setValue("category_id", camp.category_id);
          setCurrentImage(camp.url);
        } else {
          // 3) senão, faz GET /campaigns/:id
          const campRes = await api.get(`/campaigns/${id}`);
          const camp = campRes.data;
          setValue("title", camp.title);
          setValue("description", camp.description);
          setValue("goal_amount", camp.goal_amount);
          setValue(
            "end_date",
            new Date(camp.end_date).toISOString().split("T")[0]
          );
          setValue("category_id", camp.category_id);
          setCurrentImage(camp.url);
        }
      } catch (err) {
        toast.error("Erro ao carregar dados");
        console.error(err.response?.data || err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [id, location.state, setValue]);

  const onSubmit = async (dataForm) => {
    const formData = new FormData();
    Object.entries(dataForm).forEach(([key, val]) => formData.append(key, val));
    if (file) formData.append("file", file);

    try {
      await api.put(`/campaigns/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Campanha atualizada com sucesso!");
      navigate("/admin/vaquinhas");
    } catch (err) {
      toast.error(err.response?.data?.error || "Erro ao atualizar campanha");
      console.error(err);
    }
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setCurrentImage(URL.createObjectURL(f));
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Deseja realmente excluir?")) return;
    try {
      await api.delete(`/campaigns/${id}`);
      toast.success("Campanha excluída!");
      navigate("/admin/vaquinhas");
    } catch (err) {
      toast.error(err.response?.data?.error || "Erro ao excluir");
      console.error(err);
    }
  };

  if (isLoading) return <Container>Carregando...</Container>;

  return (
    <>
      <Header />
      <Container>
        <ContainerItens>
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
          >
            <h1>Editar campanha</h1>
            <P>Atualize os dados da sua campanha</P>

            <Label>Nome</Label>
            <Input {...register("title")} error={errors.title?.message} />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>

            <Label>Meta</Label>
            <Input
              type="number"
              {...register("goal_amount")}
              error={errors.goal_amount?.message}
            />
            <ErrorMessage>{errors.goal_amount?.message}</ErrorMessage>

            <Label>Data de término</Label>
            <Input
              type="date"
              {...register("end_date")}
              error={errors.end_date?.message}
            />
            <ErrorMessage>{errors.end_date?.message}</ErrorMessage>

            <Label>Categoria</Label>
            <Select {...register("category_id")}>
              <option value="">Selecione</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Select>
            <ErrorMessage>{errors.category_id?.message}</ErrorMessage>

            <Label>Imagem</Label>
            {currentImage && <ImagePreview src={currentImage} />}
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />

            <Label>Descrição</Label>
            <TextArea
              {...register("description")}
              error={errors.description?.message}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>

            <ButtonContainer>
              <ContainerButton type="button" red onClick={handleDelete}>
                Excluir
              </ContainerButton>
              <ContainerButton type="submit">Salvar</ContainerButton>
            </ButtonContainer>
          </form>
        </ContainerItens>
      </Container>
    </>
  );
}

export default EditarCampanha;
