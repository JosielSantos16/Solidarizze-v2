import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
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

export function DetalhesCampanhas() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campanha, setCampanha] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get("http://localhost:3001/campaigns");
        const foundCampaign = response.data.find(c => c.id.toString() === id.toString());
        
        if (!foundCampaign) {
          throw new Error(`Campanha com ID ${id} não encontrada`);
        }
        
        setCampanha(foundCampaign);
      } catch (err) {
        console.error("Erro ao buscar campanha:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  if (loading) return <Container><p>Carregando campanha...</p></Container>;
  if (error) return <Container><p>Erro: {error}</p></Container>;
  if (!campanha) return <Container><p>Nenhuma campanha encontrada</p></Container>;

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const handleAjudarCampanha = () => {
    navigate(`/detalhes-campanhas/doar/${id}`); 
  };

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
            
            <div className="apoiadores">
              <h3>Apoiadores</h3>
              <span className="count">0</span>
              </div>
          </CampaignMeta>

          <CampaignActions>
          <HighlightButton onClick={handleAjudarCampanha}>Ajudar Campanha</HighlightButton>
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