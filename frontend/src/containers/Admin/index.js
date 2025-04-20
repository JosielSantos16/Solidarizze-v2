import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/userContext";
import api from "../../services/api";
import { toast } from "react-toastify";
import {
  Container,
  HeaderSection,
  CampaignList,
  CampaignItem,
  Button,
  CreateButton,
  EmptyMessage,
  DivLeft,
  DivRight,
  ButtonGroup,
  CampaignContent,
  LoadingMessage,
} from "./styles";
import Header from "../../components/Header";
import { Footer } from "../../components/footer";

export function Admin() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserCampaigns = async () => {
    try {
      const { data } = await api.get("/campaigns/private/list");
      setCampaigns(data);
    } catch (err) {
      toast.error("Erro ao carregar campanhas");
      console.error(err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return navigate("/login");
    fetchUserCampaigns();
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <>
      <Header />
      <Container>
        <HeaderSection>
          <h1>Minhas Campanhas</h1>
          <CreateButton onClick={() => navigate("/campanha")}>
            + Criar Nova
          </CreateButton>
        </HeaderSection>

        {loading ? (
          <LoadingMessage>Carregando campanhas...</LoadingMessage>
        ) : campaigns.length === 0 ? (
          <EmptyMessage>
            Nenhuma campanha encontrada.
            <Button onClick={fetchUserCampaigns}>Recarregar</Button>
          </EmptyMessage>
        ) : (
          <CampaignList>
            {campaigns.map((campaign) => (
              <CampaignItem key={campaign.id}>
                <DivLeft>
                  <img src={campaign.url} alt={campaign.title} />
                </DivLeft>
                <DivRight>
                  <CampaignContent>
                    <h3>{campaign.title}</h3>
                    <p>{campaign.description}</p>
                    <ButtonGroup>
                      {/* aqui passamos o objeto todo pra editar */}
                      <Button
                        onClick={() =>
                          navigate(`/admin/editar-campanha/${campaign.id}`, {
                            state: { campaign },
                          })
                        }
                      >
                        Editar
                      </Button>
                      {campaign.is_private && (
                        <Button
                          primary
                          onClick={() =>
                            api.put(`/campaigns/${campaign.id}/public`).then(() => {
                              toast.success("Campanha publicada!");
                              fetchUserCampaigns();
                            })
                          }
                        >
                          Publicar
                        </Button>
                      )}
                    </ButtonGroup>
                  </CampaignContent>
                </DivRight>
              </CampaignItem>
            ))}
          </CampaignList>
        )}
      </Container>
      <Footer />
    </>
  );
}
