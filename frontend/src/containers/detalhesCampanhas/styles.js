import styled from 'styled-components';
import { Button } from "../../components/Button";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 80px;
  margin-right: 370px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    margin-right: 0;
    margin-top: 20px;
    margin-bottom: 40px;
    gap: 20px;
  }
`;

export const LeftDiv = styled.div`
  flex: 1;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const RightDiv = styled.div`
  margin-top: 57px;
  margin-right: -70px;
  flex: 1;
  max-width: 40%;

  .header-actions {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .campaign-footer {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    color: #666;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 0;
    margin-right: 0;
    padding: 0 10px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #3da9fc;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const CampaignImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

export const CampaignTitle = styled.h1`
  font-size: 35px;
  color: #094067;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

export const CampaignDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const CampaignMeta = styled.div`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  .arrecadado, .meta {
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
    
    .label {
      display: block;
      font-size: 25px;
      font-weight: 600;
      color: #094067;
    }

    .valor {
      display: block;
      font-size: 36px;
      color: #5f6c7b;
      margin-bottom: 5px;
    }
  }

  .meta {
    border-bottom: none;
  }

  .apoiadores {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 18px;
      color: #333;
      margin: 0;
    }

    .count {
      font-size: 16px;
      color: #5f6c7b;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    
    .arrecadado, .meta {
      .label {
        font-size: 20px;
      }
      
      .valor {
        font-size: 28px;
      }
    }
    
    .apoiadores {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
  }
`;

export const CampaignActions = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
`;

export const OrganizerInfo = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
  }

  .organizer-details {
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    div {
      strong {
        display: block;
        color: #333;
      }

      p {
        margin: 0;
        color: #666;
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const SupportSection = styled.div`
  background: #f5f9ff;
  padding: 20px;
  border-radius: 8px;

  h3 {
    margin-top: 0;
    font-size: 18px;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EndButton = styled.button`
  padding: 8px 16px;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HighlightButton = styled(Button)`
  background: #3da9fc; 
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 184, 148, 0.6);
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 10px rgba(0, 184, 148, 0.4);
    }
    50% {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 184, 148, 0.8);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 10px rgba(0, 184, 148, 0.4);
    }
  }

  animation: pulse 1.5s infinite;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 12px;
  }
`;