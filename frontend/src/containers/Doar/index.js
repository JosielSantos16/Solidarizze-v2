import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/userContext'; 
import { 
  Container,
  ContainerItens,
  Label,
  Input,
  ButtonContainer,
  ContainerButton,
  ErrorMessage,
  CampaignMeta,
  SectionDivider
} from './styles';
import { Footer, Header } from '../../components';

export function Doar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [valor, setValor] = useState('00,00');
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isDonating, setIsDonating] = useState(false);
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning('Por favor, faça login para realizar doações');
      navigate('/login', { 
        state: { 
          from: { 
            pathname: `/detalhes-campanhas/doar/${id}`,
            search: window.location.search 
          } 
        } 
      });
      return;
    }

    async function fetchCampaign() {
      try {
        const { data } = await api.get(`/campaigns/${id}`);
        setCampaign(data);
      } catch (error) {
        console.error("Erro ao buscar campanha:", error);
        setError('Erro ao carregar campanha');
        toast.error('Erro ao carregar campanha');
      } finally {
        setLoading(false);
      }
    }

    fetchCampaign();
  }, [id, isAuthenticated, navigate]);

  const handleValorChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.padStart(3, '0');
    value = value.slice(0, -2) + ',' + value.slice(-2);
    setValor(value);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!valor || valor === '00,00') {
      setError('Por favor, insira um valor válido');
      return;
    }

    setIsDonating(true);
    
    try {
      const valorNumerico = parseFloat(valor.replace(',', '.'));
      
      const { data } = await api.post(`/campaigns/${id}/donate`, {
        amount: valorNumerico
      });

      toast.success(`Doação de R$${valor} realizada com sucesso!`);
      
      navigate(`/detalhes-campanhas/${id}`, {
        state: { 
          updatedCampaign: {
            ...campaign,
            current_amount: data.campaign.current_amount
          } 
        }
      });
      
    } catch (error) {
      console.error("Erro ao realizar doação:", error);
      toast.error(error.response?.data?.error || 'Erro ao processar doação');
    } finally {
      setIsDonating(false);
    }
  };

  if (loading) return <Container><ContainerItens>Carregando...</ContainerItens></Container>;
  if (error) return <Container><ContainerItens>{error}</ContainerItens></Container>;
  if (!campaign) return <Container><ContainerItens>Campanha não encontrada</ContainerItens></Container>;

  const progressPercentage = Math.min(
    (campaign.current_amount / campaign.goal_amount) * 100,
    100
  );

  return (
    <>
      <Header />
      <Container>
        <ContainerItens>
          <CampaignMeta>
            <div className="arrecadado">
              <span className="label">Arrecadado</span>
              <span className="valor">R$ {campaign.current_amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              <p>Meta: R$ {campaign.goal_amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <p>Encerra em {new Date(campaign.end_date).toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </CampaignMeta>

          <SectionDivider />

          <form onSubmit={handleSubmit}>
            <h3>Quanto você deseja contribuir?</h3>
            
            <Label>Valor</Label>
            <Input 
              type="text" 
              value={`R$${valor}`}
              onChange={handleValorChange}
              required
              error={error}
              disabled={isDonating}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <ButtonContainer>
              <ContainerButton 
                type="submit" 
                disabled={isDonating}
              >
                {isDonating ? 'Processando...' : 'Confirmar Doação'}
              </ContainerButton>
            </ButtonContainer>

          </form>
        </ContainerItens>
      </Container>
      <Footer/>
    </>
  );
}