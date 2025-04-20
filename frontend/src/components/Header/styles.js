import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
  }

  .navbar {
    display: flex;
    padding: 0px 30px;
    background: linear-gradient(135deg, #3da9fc 0%, #1a73e8 100%);
    justify-content: space-between;
    height: 70px;
    align-items: center;
    position: relative;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  

  .menu-container {
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all 0.3s ease;
  }

  button {
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  .login-button {
    background: transparent;
    color: white;
    border: 1px solid white;
  }

  .login-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .campaign-button {
    background: #F4C542;
    color: white;
  }

  .campaign-button:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .menu-container {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 70px;
      right: 0;
      background-color: #1a73e8;
      width: 100%;
      padding: 20px;
      z-index: 999;
      height: 100vh;
    }

    .menu-container.active {
      display: flex;
    }

    button {
      width: 100%;
      margin-top: 10px;
      font-size: 1rem;
    }

    .navbar {
      padding: 0 15px;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 5px 10px;

  &:hover {
    color: #04D9B2;
  }
`;

export const WelcomeMessage = styled.span`
  color: white;
  font-weight: bold;
  padding: 5px 20px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: -20px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 100;
  padding: 10px 0;
`;

export const DropdownItem = styled.div`
  padding: 8px 15px;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #f5f5f5;
  }
`;
