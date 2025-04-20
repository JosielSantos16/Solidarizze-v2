import styled from 'styled-components';

export const Container = styled.div`
background-color: #FAFAFA;
margin-top: -px;
margin-bottom: 100px;
`

export const Title = styled.h1`
  color: #094067;
  text-align: center;
  margin-top: 60px;
  font-size: 35px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #5f6c7b;
  text-align: center;
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const StyledAccordion = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  

  .szh-accordion__item {
    overflow: hidden;
    background-color: #ffffff;
    border-bottom: 0.1px solid black;
    transition: box-shadow 0.3s ease;
  }

  .szh-accordion__item-btn {
    background-color: #FAFAFA;
    padding: 15px 20px;
    color: #094067;  
    font-weight: 500;;
    font-size: 18px;
    font-weight: 500;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.3s ease;


  }

  .szh-accordion__item-content {
    padding: 15px 20px;
    background-color:  #FAFAFA;
    font-size: 14px;
    color: #555;
    font-size: 16px;
    line-height: 1.6;
  }
`;