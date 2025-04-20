import styled from "styled-components";
import Background from "../../assets/background.jpg";

export const Container = styled.div`
  height: 100vh;
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
  }
`;

export const ContainerItens = styled.div`
  background: #fefefe;
  border-radius: 12px;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: 500;
    margin-top: 40px;
    line-height: 28px;
    color: #3da9fc;
    text-align: center;
    margin-top: 10px;  
    font-size: 40px;
  }

  @media (max-width: 768px) {
    padding: 25px 35px;
    width: 85%;
    margin-top: 30px;
    box-shadow: none; 
    width: 100%; 
    height: 100vh;
    margin-top: 0; 
  }
`;

export const P = styled.p`
  margin-top: 20px;
  font-style: normal;
  color: #2d334a;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  margin-top: 28px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  padding-left: 10px;
  border: ${props => (props.error ? '2px solid red' : "2px solid gray")};

  &:focus {
    outline: none; 
    border: 2px solid #3da9fc; 
  }

  @media (max-width: 768px) {
    height: 42px;
  }
`;

export const ErrorMessage = styled.p`
  color: #CC1717;
  font-size: 12px;
  margin-top: 5px;
`;

export const SignUpLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: black;
  margin-top: 50px;
  margin-bottom: 20px;

  a {
    color: #3da9fc;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;