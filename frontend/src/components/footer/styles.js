import styled from 'styled-components';

export const Container = styled.footer`
  background: linear-gradient(135deg, #3da9fc 0%, #1a73e8 100%);
  color: white;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const SolidarizzeImg = styled.img`
  height: 250px;
  object-fit: contain;
`;

export const Display = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 320px;
  padding: 1.5rem;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: white;
  }
`;

export const DivLinks = styled(Card)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
          color: #ffd700;
        }
      }
    }
  }
`;

export const DivContatos = styled(Card)`
  p {
    margin-bottom: 0.6rem;
    color: white;
    font-weight: 400;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 0;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
`;
