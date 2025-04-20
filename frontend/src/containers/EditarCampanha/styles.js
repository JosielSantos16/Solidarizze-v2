import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F3F5F9;
  background-position: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    background-image: none;
    background-color: #fefefe;
  }
`;

export const ContainerItens = styled.div`
  background: #fefefe;
  border-radius: 12px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 590px;
  width: 100%;
  margin: 20px;

  h1 {
    font-weight: 600;
    margin: 0 0 20px 0;
    line-height: 1.2;
    color: #3da9fc;
    text-align: center;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    padding: 25px 35px;
    width: 85%;
    margin-top: 30px;
    box-shadow: none; 
    width: 100%; 
  }
`;

export const P = styled.p`
  margin-top: 10px;
  margin-bottom: 30px;
  font-style: normal;
  color: #2d334a;
  text-align: center;
  font-size: 14px;
`;

export const Label = styled.label`
  margin-top: 15px;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2d334a;
  font-size: 14px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  padding: 0 15px;
  border: ${props => (props.error ? '2px solid #CC1717' : "2px solid #ddd")};
  font-size: 14px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border: 2px solid #3da9fc;
    box-shadow: 0 0 5px rgba(61, 169, 252, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  padding: 15px;
  border: ${props => (props.error ? '2px solid #CC1717' : "2px solid #ddd")};
  font-size: 14px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border: 2px solid #3da9fc;
    box-shadow: 0 0 5px rgba(61, 169, 252, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const ErrorMessage = styled.p`
  color: #CC1717;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ContainerButton = styled.button`
  flex: 1;
  padding: 16px;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  
  background-color: ${props => {
    if (props.red) return "#FF4444";
    if (props.secondary) return "#3da9fc";
    return "#F4C542";
  }};

  &:hover {
    background-color: ${props => {
      if (props.red) return "#CC0000";
      if (props.secondary) return "#2d8bcc";
      return "#E0B03A";
    }};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(0,0,0,0.1);
  }
`;

export const FileInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  
  &::file-selector-button {
    padding: 10px 20px;
    border-radius: 5px;
    background: #3da9fc;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 15px;
    transition: all 0.3s;
    
    &:hover {
      background: #2d8bcc;
    }
  }
`;

export const Select = styled.select`
  width: 105%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 2px solid ${props => props.error ? '#CC1717' : '#ddd'};
  border-radius: 5px;
  background: white;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  font-size: 14px;
  transition: all 0.3s;
  
  &:focus {
    outline: none;
    border: 2px solid #3da9fc;
    box-shadow: 0 0 5px rgba(61, 169, 252, 0.5);
  }
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  width: 900px;
  max-height: 300px;
  margin: 15px 0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border: 1px solid #eee;
  object-fit: contain;
`;