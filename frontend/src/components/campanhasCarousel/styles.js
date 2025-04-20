import styled from "styled-components";

export const Body = styled.div`
    background-color: #FAFAFA;
`

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    background-color: #FAFAFA;
    padding: 20px;
    max-width: 1200px;

    .rec.rec-arrow {
        background: linear-gradient(135deg, #3da9fc 0%, #1a73e8 100%);
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
        padding: 10px;

        .rec.rec-arrow {
            width: 25px;
            height: 25px;
            min-width: 25px;
            line-height: 25px;
            font-size: 12px;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;

    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const TitleContainer = styled.div`
    h1 {
        font-size: 35px;
        color: #094067;
        margin-top: 50px;
        margin-bottom: -25px;
        text-align: left;

        @media (max-width: 768px) {
            font-size: 28px;
            margin-top: 30px;
            margin-bottom: -15px;
        }
    }

    p {
        font-size: 18px;
        color: #666;
        text-align: left;
        margin: 0;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -30px; 
    margin-bottom: 70px; 

    @media (max-width: 768px) {
        margin-top: -10px;
        margin-bottom: 40px;
    }
`;

export const VerMaisButton = styled.button`
    background-color: transparent;
    color: #000000; 
    border: 2px solid #000000;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold; 
    cursor: pointer;
    transition: all 0.3s ease;
    width: 200px;
    height: 50px;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    margin-top: 50px;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.05); 
        color: #000000;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    }

    &:active {
        transform: translateY(0);
        background-color: rgba(0, 0, 0, 0.1);
    }
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(244, 197, 66, 0.2),
            transparent
        );
        transition: all 0.5s;
    }

    &:hover::after {
        left: 100%;
    }

    @media (max-width: 768px) {
        width: 180px;
        height: 45px;
        font-size: 13px;
    }
`;

export const Campaigns = styled.div`
    background-color: white;
    margin-bottom: 70px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 90%;
    margin: 10px auto;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
    }

    @media (max-width: 768px) {
        width: 95%;
        margin-bottom: 40px;
    }
`;

export const Info = styled.div`
    padding: 15px;
    text-align: left;
    position: relative;
    background: white;
    border-radius: 0 0 8px 8px;

    h2 {
        font-size: 20px;
        color: #094067;
        margin-bottom: 10px;
        font-weight: 600;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 50px;
    }

    p {
        font-size: 14px;
        color: #555;
        margin-bottom: 6px;
    }

    @media (max-width: 768px) {
        padding: 12px;
        
        h2 {
            font-size: 18px;
            min-height: 40px;
        }
        
        p {
            font-size: 13px;
        }
    }
`;