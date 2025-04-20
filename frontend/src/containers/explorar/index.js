import React, { useState, useEffect } from "react";
import ImageImg from '../../assets/image-banner2.png';
import Carousel from 'react-elastic-carousel';
import api from "../../services/api";
import { CardCampaigns } from "../../components/CardCampaigns";
import Header from "../../components/Header";
import { Footer } from "../../components/footer";

import { 
    FaBaby, 
    FaFireAlt, 
    FaBriefcase, 
    FaRunning, 
    FaGlassCheers, 
    FaGraduationCap,
    FaPaw,
    FaTree,
    FaHome,
    FaHeartbeat,
    FaLaptopCode
} from 'react-icons/fa';
import { MdDiversity3 } from 'react-icons/md';

import {
    Banner,
    ImageBanner,
    Descricao,
    Categorias,
    CategoryButton,
    Container,
    CampaignsContainer,
    PaginationContainer,
    PaginationButton,
    NoCampaignsMessage
} from './styles';

const categoryIcons = {
    "Todas": MdDiversity3,
    "Infantil": FaBaby,
    "Emergência": FaFireAlt,
    "Trabalho": FaBriefcase,
    "Esporte": FaRunning,
    "Festas": FaGlassCheers,
    "Educação": FaGraduationCap,
    "Animais": FaPaw,
    "Meio Ambiente": FaTree,
    "Moradia": FaHome,
    "Saúde": FaHeartbeat,
    "Tecnologia": FaLaptopCode,
};

export function Explorar() {
    const [categories, setCategories] = useState([]);
    const [campaigns, setCampaigns] = useState([]);
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const campaignsPerPage = 12;

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories');
            const newCategories = [{ id: 0, name: "Todas" }, ...data];
            setCategories(newCategories);
        }

        async function loadCampaigns() {
            const { data } = await api.get('campaigns/public');
            setCampaigns(data);
            setFilteredCampaigns(data);
        }

        loadCampaigns();
        loadCategories();
    }, []);

    useEffect(() => {
        const filtered = selectedCategory === 0 
            ? campaigns 
            : campaigns.filter(campaign => campaign.category_id === selectedCategory);

        setFilteredCampaigns(filtered);
        setCurrentPage(1);
    }, [selectedCategory, campaigns]);

    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 400, itemsToShow: 3 },
        { width: 600, itemsToShow: 4 },
        { width: 800, itemsToShow: 5 },
        { width: 1000, itemsToShow: 6 },
        { width: 1200, itemsToShow: 8 }
    ];

    const gradientColors = [
        "linear-gradient(180deg, #FFB6C1, #FFC1CC)",
        "linear-gradient(180deg, #FFDAB9, #FFE4B5)",
        "linear-gradient(180deg, #B0E0E6, #AFEEEE)",
        "linear-gradient(180deg, #98FB98, #B0E57C)",
        "linear-gradient(180deg, #E6E6FA, #D8BFD8)",
    ];

    const totalPages = Math.ceil(filteredCampaigns.length / campaignsPerPage);
    const campaignsToDisplay = filteredCampaigns.slice(
        (currentPage - 1) * campaignsPerPage,
        currentPage * campaignsPerPage
    );

    const getCategoryName = () => {
        return categories.find(c => c.id === selectedCategory)?.name || "Todas";
    };

    return (
        <>
            <Header />

            <Container>
                <Banner>
                    <ImageBanner src={ImageImg} alt="Solidarizze" />
                    <Descricao>Explore e contribua<br />com solidariedade</Descricao>
                </Banner>

                <Categorias>
                    <Carousel
                        breakPoints={breakPoints}
                        pagination={false}
                        showArrows={true}
                        enableAutoPlay={false}
                        itemPadding={[0, 10]}
                    >
                        {categories &&
                            categories.map((category, index) => {
                                const Icon = categoryIcons[category.name] || MdDiversity3;
                                return (
                                    <CategoryButton
                                        key={category.id}
                                        isActiveCategory={selectedCategory === category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        style={{
                                            background: gradientColors[index % gradientColors.length]
                                        }}
                                    >
                                        <Icon size={24} style={{ marginBottom: 5 }} />
                                        {category.name}
                                    </CategoryButton>
                                );
                            })}
                    </Carousel>
                </Categorias>

                <CampaignsContainer>
                    {campaignsToDisplay.length > 0 ? (
                        campaignsToDisplay.map(campaign => (
                            <CardCampaigns key={campaign.id} campaign={campaign} />
                        ))
                    ) : (
                        <NoCampaignsMessage>
                            <h3>
                                {selectedCategory === 0 
                                    ? 'Nenhuma campanha encontrada' 
                                    : `Ainda não há campanhas na categoria "${getCategoryName()}"`}
                            </h3>
                            <p>Que tal criar a primeira campanha?</p>
                        </NoCampaignsMessage>
                    )}
                </CampaignsContainer>

                {totalPages > 1 && campaignsToDisplay.length > 0 && (
                    <PaginationContainer>
                        <PaginationButton 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </PaginationButton>

                        {[...Array(totalPages)].map((_, index) => (
                            <PaginationButton
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                isActive={currentPage === index + 1}
                            >
                                {index + 1}
                            </PaginationButton>
                        ))}

                        <PaginationButton 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Próxima
                        </PaginationButton>
                    </PaginationContainer>
                )}
            </Container>

            <Footer />
        </>
    );
}