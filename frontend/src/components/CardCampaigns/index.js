import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom"; 
import { 
    Container, 
    CampaignMeta, 
    CampaignTitle, 
    CampaignsEndDate, 
    Image, 
    Info 
} from './styles';

export function CardCampaigns({ campaign }){
    const { putCampaignInCart } = useCart();
    const navigate = useNavigate(); 
    
    const handleClick = () => {
        console.log("Dados da campanha clicada:", campaign); 
        putCampaignInCart(campaign);
        navigate(`/detalhes-campanha/${campaign.id}`); 
    }

    return (
        <Container onClick={handleClick}>
            <Image src={campaign.url} alt="Imagem da campanha"/>
            <Info>
                <CampaignTitle>{campaign.title}</CampaignTitle>
                <CampaignMeta>Meta: R$ {campaign.goal_amount}</CampaignMeta>
                <CampaignsEndDate>Termina em: {new Date(campaign.end_date).toLocaleDateString()}</CampaignsEndDate>
            </Info>
        </Container>
    )
}

CardCampaigns.propTypes = {
    campaign: PropTypes.object.isRequired
}