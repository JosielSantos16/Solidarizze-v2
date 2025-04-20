import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    text-align: center;
    background-color: #162737;
    position: relative;
    overflow: hidden;

`;

export const ImageBanner = styled.img`
    height: 355px;
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    
    @media (max-width: 768px) {
        height: 220px;
        left: 5%;
        position: relative;
        transform: none;
        top: auto;
        margin-right: 10px;
    }

    @media (max-width: 480px) {
        height: 180px;
    }
`;

export const Descricao = styled.p`
    color: white;
    font-weight: bold;
    font-size: 44px;
    position: absolute;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 1.3;
    margin: 0;
    padding: 0;
    width: auto;
    max-width: 500px;

    br {
        display: block;
        content: "";
        margin-top: 10px;
    }
    
    @media (max-width: 768px) {
        font-size: 24px;
        right: 20px;
        max-width: 50%;
        position: relative;
        transform: none;
        top: auto;
        text-align: left;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        max-width: 60%;
    }
`;

export const Categorias = styled.div`
    height: 4.5cm;
    width: 90%;
    max-width: 1200px;
    background-color: white;
    padding: 20px;
    text-align: center;
    margin: -1cm auto 0;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #eaeaea;
    z-index: 10;

    .rec.rec-arrow {
        background-color: #3da9fc;
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        min-width: 30px;
        line-height: 30px;
        font-size: 14px;
        margin: 0 5px;     
        border-radius: 50%;  
        
        &:hover {
            background-color: #2c7be5;
            transform: scale(1.05); 
        }
        
        &:disabled {
            visibility: hidden; 
        }
    }
    
    @media (max-width: 768px) {
        width: 95%;
        height: auto;
        padding: 15px;
        margin-top: -30px;
    }

    @media (max-width: 480px) {
        padding: 10px;
        margin-top: -20px;
    }
`;

const gradientColors = [
    "linear-gradient(180deg, #FFB6C1, #FFC1CC)", 
    "linear-gradient(180deg, #FFDAB9, #FFE4B5)", 
    "linear-gradient(180deg, #B0E0E6, #AFEEEE)",  
    "linear-gradient(180deg, #98FB98, #B0E57C)",  
    "linear-gradient(180deg, #E6E6FA, #D8BFD8)",  
];

export const CategoryButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 110px;
    background: ${({ index }) => gradientColors[index % gradientColors.length]};
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border: 2px solid ${({ isActiveCategory }) => isActiveCategory ? '#3da9fc' : 'rgba(255, 255, 255, 0.6)'};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: ${({ isActiveCategory }) => 
        isActiveCategory ? '0 0 0 3px rgba(61, 169, 252, 0.5)' : '0 4px 6px rgba(0, 0, 0, 0.1)'};
    opacity: ${({ isActiveCategory }) => (isActiveCategory ? '1' : '0.8')};
    transform: ${({ isActiveCategory }) => (isActiveCategory ? 'scale(1.1)' : 'scale(1)')};
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ isActiveCategory }) => 
            isActiveCategory ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
        transition: background 0.3s ease;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        opacity: 1;
    }

    @media (max-width: 768px) {
        width: 80px;
        height: 90px;
    }

    @media (max-width: 480px) {
        width: 70px;
        height: 80px;
    }
`;

export const CategoryIcon = styled.div`
    font-size: 32px;
    color: #333;
    
    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`;

export const CategoryName = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
    color: #222;
    text-align: center;
    padding: 0 5px;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

export const CampaignsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 50px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        padding: 30px;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 20px;
        gap: 15px;
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        gap: 5px;
        margin: 1.5rem auto;
    }
`;

export const PaginationButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 6px;
    border: none;
    background-color: ${({ isActive }) => (isActive ? "#3da9fc" : "#e0e0e0")};
    color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: ${({ isActive }) => (isActive ? "#2c7be5" : "#d0d0d0")};
        transform: scale(1.05);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 14px;
    }
`;

export const LoadMoreButton = styled.button`
    background-color: #04D9B2;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    margin: 30px auto;
    display: block;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #03b9a0;
    }

    @media (max-width: 480px) {
        padding: 10px 20px;
        font-size: 14px;
        margin: 20px auto;
    }
`;

export const NoCampaignsMessage = styled.div`
    width: 100%;
    text-align: center;
    padding: 40px 0;
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h3 {
        color: #555;
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        color: #888;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        padding: 30px 0;
        
        h3 {
            font-size: 1.3rem;
        }
        
        p {
            font-size: 0.9rem;
        }
    }
`;