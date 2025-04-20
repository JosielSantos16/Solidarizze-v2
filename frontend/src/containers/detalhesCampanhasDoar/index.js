import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { 
  Container, 
  LeftDiv, 
  RightDiv,
  CampaignImage, 
  CampaignTitle, 
  CampaignDescription,
  CampaignMeta,
  CampaignActions,
  HighlightButton,
} from "./styles";
import { Footer, Header } from "../../components";

export function DetalhesCampanhasDoar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [campanha, setCampanha] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    if (location.state?.updatedCampaign) {
      setCampanha(location.state.updatedCampaign);
      setLoading(false);
      return;
    }

    const fetchCampaign = async () => {
      try {
          const token = localStorage.getItem('token');
          const config = token ? {
              headers: { Authorization: `Bearer ${token}` }
          } : {};
          
          const response = await axios.get(
              `http://localhost:3001/campaigns/${id}`,
              config
          );
          setCampanha(response.data);
      } catch (err) {
          console.error("Erro ao buscar campanha:", err);
          if (err.response?.status === 401 || err.response?.status === 403) {
              toast.error('Esta campanha é privada. Faça login para acessar.');
              navigate('/login');
          } else {
              setError(err.message);
              toast.error('Erro ao carregar campanha');
          }
      } finally {
          setLoading(false);
      }
  };

    fetchCampaign();
  }, [id, location.state]);

  if (loading) return <Container><p>Carregando campanha...</p></Container>;
  if (error) return <Container><p>Erro: {error}</p></Container>;
  if (!campanha) return <Container><p>Nenhuma campanha encontrada</p></Container>;

  const progressPercentage = Math.min(
    (campanha.current_amount / campanha.goal_amount) * 100,
    100
  );

  return (
    <>
      <Header />

      <Container>
        <LeftDiv>
          <CampaignTitle>{campanha.title}</CampaignTitle>
          <CampaignImage src={campanha.url} alt={campanha.title} />
          <h3>Descrição: </h3>
          <CampaignDescription>{campanha.description}</CampaignDescription>
        </LeftDiv>

        <RightDiv>
          <CampaignMeta>
            <div className="arrecadado">
              <span className="label">Arrecadado</span>
              <span className="valor">R$ {parseFloat(campanha.current_amount || 0).toLocaleString('pt-BR')}</span>
            </div>
            
            <div className="meta">
              <span className="label">Meta</span>
              <span className="valor">R$ {parseFloat(campanha.goal_amount).toLocaleString('pt-BR')}</span>
            </div>

            <div style={{
              height: '10px',
              background: '#e0e0e0',
              borderRadius: '5px',
              margin: '15px 0',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                background: '#3da9fc',
                width: `${progressPercentage}%`,
                borderRadius: '5px'
              }} />
            </div>

            <div className="apoiadores">
              <h3>Apoiadores</h3>
              <span className="count">{campanha.donations_count || 0}</span>
            </div>
          </CampaignMeta>

          <CampaignActions>
            <HighlightButton onClick={() => navigate(`/detalhes-campanhas/doar/${id}`)}>
              Ajudar Campanha
            </HighlightButton>
          </CampaignActions>

          <div className="campaign-footer">
            <p><strong>{campanha.organizer?.name || 'Organizador'}</strong></p>
            <p>Campanha criada em {new Date(campanha.created_at).toLocaleDateString('pt-BR')}</p>
          </div>
        </RightDiv>
      </Container>

      <Footer/>
    </>
  );
}