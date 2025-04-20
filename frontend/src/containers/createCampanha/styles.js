import styled from "styled-components";
import Background from "../../assets/background.jpg";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F3F5F9;
  background-image: url(${Background});
  background-size: cover;
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

  h1 {
    font-weight: 500;
    margin: 20px 0;
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
  margin-bottom: 20px;
  font-style: normal;
  color: #2d334a;
  text-align: center;
  font-size: 14px;
`;

export const Label = styled.label`
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #2d334a;
  font-size: 14px;
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
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  padding: 10px;
  border: ${props => (props.error ? '2px solid #CC1717' : "2px solid #ddd")};
  font-size: 14px;
  resize: vertical;
  font-family: inherit;

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
  margin-bottom: 10px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; 
  margin-top: 30px;
  width: 100%;
`;

export const ContainerButton = styled.button`
  margin-top: 20px;
  background-color: ${props => (props.red ? "#FF4444" : "#F4C542")};
  padding: 16px;
  border: none;
  border-radius: 7px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;

  &:hover {
    background-color: ${props => (props.red ? "#CC0000" : "#E0B03A")};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const FileInput = styled.input`
  margin-bottom: 20px;
  &::file-selector-button {
    padding: 8px 16px;
    border-radius: 4px;
    background: #3da9fc;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${props => props.error ? 'red' : '#ddd'};
  border-radius: 4px;
  background: white;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  
  &:focus {
    outline: none;
    border: 2px solid #3da9fc;
  }
`;