import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartCampaign, setCartCampaign] = useState({});

    const putCampaignInCart = async campaign => {
        console.log("Dados recebidos no CartContext:", campaign); 
        
        if (!campaign || !campaign.id || !campaign.title) {
            console.error("Dados da campanha incompletos:", campaign);
            return;
        }

        const debugCart = {
            id: campaign.id,
            title: campaign.title,
            goal_amount: campaign.goal_amount,
            end_date: campaign.end_date,
            url: campaign.url
        };
        
        console.log("Dados que seriam salvos:", debugCart);
        localStorage.setItem('solidarizze:debugCart', JSON.stringify(debugCart));
        
        setCartCampaign(debugCart);
    };

    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('solidarizze:cartInfo');
            console.log("Dados recuperados do localStorage:", clientCartData); 

            if(clientCartData) {
                try {
                    const parsedData = JSON.parse(clientCartData);
                    console.log("Dados parseados:", parsedData); 
                    setCartCampaign(parsedData);
                } catch (error) {
                    console.error("Erro ao parsear dados do carrinho:", error);
                }
            }
        }

        loadUserData();
    }, []);

    return (
        <CartContext.Provider value={{ putCampaignInCart, cartCampaign }}>
            {children} 
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }

    return context;
};