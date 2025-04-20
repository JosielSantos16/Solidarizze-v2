import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 16px;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

export const Info = styled.div`
    padding: 16px;
    background: white;
`;

export const CampaignTitle = styled.h1`
    font-size: 18px;
    margin: 0 0 8px 0;
    color: #333;
`;

export const CampaignMeta = styled.p`
    font-size: 14px;
    color: #666;
    margin: 0 0 4px 0;
`;

export const CampaignsEndDate = styled.p`
    font-size: 14px;
    color: #888;
    margin: 0;
`;

export const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`;