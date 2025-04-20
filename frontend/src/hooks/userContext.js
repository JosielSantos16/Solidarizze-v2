import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const putUserData = async (userInfo) => {
    setUserData(userInfo);
    await localStorage.setItem('solidarizze:userData', JSON.stringify(userInfo));
  };

  const logout = async () => {
    await localStorage.removeItem('solidarizze:userData');
    setUserData(null);
    window.location.pathname = '/login';
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('solidarizze:userData');
      if (clientInfo) {
        try {
          const parsedData = JSON.parse(clientInfo);
          setUserData(parsedData);
        } catch (error) {
          console.log('Carregando usuário do localStorage:', clientInfo);
          console.error('Erro ao parsear dados:', error);
        }
      }
      setIsLoading(false);
    };
    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ 
      userData, 
      putUserData, 
      logout,
      isAuthenticated: !!userData,
      isLoading
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};