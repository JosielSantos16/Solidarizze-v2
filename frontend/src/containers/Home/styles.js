import styled from "styled-components";
import BannerImg from '../../assets/baner.jpeg';
import BannerImgMobile from '../../assets/banner-mobile.jpeg';
import { Button } from "../../components"; 

export const Banner = styled.div`
  width: 100%;
  max-width: 100vw; 
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 630px;
  background-image: url(${BannerImg});
  background-size: cover;
  background-position: center;
  text-align: center;
  overflow-x: hidden; 
    a {
    display: contents; 
  }

  @media (max-width: 768px) {
    background-image: url(${BannerImgMobile});
    height: 500px;
    padding: 20px;
    box-sizing: border-box; 
  
  }
`;



export const SolidarizzeImg = styled.img`
  height: 450px;
  margin-top: -50px;
  margin-right: 700px;

  @media (max-width: 768px) {
    margin: 0;
    height: 300px;
    margin-top: -50px;
  }
`;

export const BannerButton = styled(Button)`
  margin: 20px auto 0 auto; 
  display: block;

  @media (min-width: 769px) {
    margin-left: 0;
    margin-right: 700px; 
  }
`;


export const Descricao = styled.p`
  margin-right: 700px;
  color: white;
  margin-top: -140px;
  font-weight: bold;
  font-size: 25px;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
    font-size: 18px;
    margin-top: -80px;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Introducao = styled.div`
height: 300px;
background: linear-gradient(135deg, #3da9fc 0%, #1a73e8 100%);
padding: 20px;
text-align: center;

`

export const Titulo = styled.h1`
font-size: 35px;
margin-top: 20px;
margin-bottom: 20px;
color: white;
text-align: center;
`

export const Description = styled.p`
  font-size: 25px;
  color: white;
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 20px;
    text-align: center;
  }
`;


export const ContainerDivider = styled.div`
background-color: #FAFAFA;
`

