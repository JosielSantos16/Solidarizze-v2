import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F3F5F9;
  background-image: url(${props => props.background || 'none'});
  background-size: cover;
  background-position: center;
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
    background-image: none;
    align-items: flex-start;
  }
`;

export const ContainerItens = styled.div`
  background: #fefefe;
  border-radius: 12px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  margin: 20px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  h1, h2, h3 {
    font-weight: 500;
    margin: 20px 0;
    line-height: 1.2;
    color: #094067;
    text-align: center;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 25px;
    margin: 10px;
    box-shadow: none;
    border-radius: 0;
    background: transparent;
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
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
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
  width: 100%;

  .arrecadado, .meta {
    padding: 12px 0;
    
    .label {
      display: block;
      font-size: 16px;
      font-weight: 600;
      color: #5f6c7b;
    }

    .valor {
      display: block;
      font-size: 28px;
      color: #094067;
      margin-bottom: 5px;
      font-weight: bold;
    }

    p {
      color: #5f6c7b;
      margin: 5px 0;
      font-size: 14px;
    }
  }

  .progress-bar {
    height: 10px;
    background: #e0e0e0;
    border-radius: 5px;
    margin: 15px 0;
    overflow: hidden;

    .progress-fill {
      height: 100%;
      background: #3da9fc;
      border-radius: 5px;
      transition: width 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    box-shadow: none;
    border: none;
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid #eaeaea;
  margin: 1.5rem 0;
  width: 100%;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const Label = styled.label`
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #2d334a;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  padding-left: 10px;
  border: ${props => (props.error ? '2px solid #CC1717' : "2px solid #ddd")};
  font-size: 14px;

  &:focus {
    outline: none;
    border: 2px solid #3da9fc;
    box-shadow: 0 0 5px rgba(61, 169, 252, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 768px) {
    height: 45px;
  }
`;

export const InputValor = styled(Input)`
  font-size: 24px;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ContainerButton = styled.button`
  background-color: #3da9fc;
  padding: 16px;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
  box-shadow: 0 2px 10px rgba(61, 169, 252, 0.3);

  &:hover {
    background-color: #2d8ed8;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

export const ErrorMessage = styled.p`
  color: #CC1717;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const SecureInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #5f6c7b;
  font-size: 14px;

  strong {
    display: block;
    margin-bottom: 5px;
    color: #094067;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;