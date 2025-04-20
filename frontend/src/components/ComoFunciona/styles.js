import styled from "styled-components";

export const Div = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #3da9fc 0%, #1a73e8 100%);
  color: white;
  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Divider = styled.hr`
  width: 80px;
  height: 4px;
  background: white;
  border: none;
  margin: 0 auto 3rem;
  border-radius: 2px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const ServiceRow = styled.div`
  display: contents;
`;

export const Service = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const ServiceIcon = styled.img`
  height: 120px;
  margin: 0 auto 1rem;
  display: block;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
`;

export const ServiceContent = styled.div`
  text-align: center;
`;

export const ServiceTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;