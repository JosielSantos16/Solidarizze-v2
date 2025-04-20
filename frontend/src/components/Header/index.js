import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/solidarizze.png';
import { Container, StyledLink, WelcomeMessage, UserAvatar, DropdownMenu, DropdownItem, Hamburger } from './styles'; 
import { useUser } from '../../hooks/userContext';
import User from '../../assets/user.png';
import { FaBars } from 'react-icons/fa';

export function Header() {
  const navigate = useNavigate();
  const { userData, logout, isAuthenticated } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleCreateCampaign = () => {
    isAuthenticated ? navigate('/campanha') : navigate('/cadastro');
  };

  return (
    <Container>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="Logo" height={200} />
          </Link>
        </div>

        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </Hamburger>

        <div className={`menu-container ${menuOpen ? 'active' : ''}`}>
          <StyledLink to="#">Sobre nós</StyledLink>
          <StyledLink to="#">Contatos</StyledLink>

          {isAuthenticated ? (
            <div
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <UserAvatar src={User} alt="Usuário" />
              <WelcomeMessage>Olá, {userData?.name || 'Usuário'}</WelcomeMessage>

              {showDropdown && (
                <DropdownMenu>
                  <DropdownItem onClick={() => navigate('/admin/vaquinhas')}>Minhas vaquinhas</DropdownItem>
                  <hr style={{ margin: '5px 0', borderColor: '#f0f0f0' }} />
                  <DropdownItem onClick={handleLogout}>Sair</DropdownItem>
                </DropdownMenu>
              )}
            </div>
          ) : (
            <button className="login-button" onClick={() => navigate('/login')}>
              Entrar
            </button>
          )}
          <button className="campaign-button" onClick={handleCreateCampaign}>
            Criar campanha
          </button>
        </div>
      </nav>
    </Container>
  );
}

export default Header;
