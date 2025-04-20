import styled from 'styled-components';

export const HowContainer = styled.section`
  text-align: center;
  padding: 80px 20px;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 2.5rem;
    color: #094067;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .subtitle {
    color: #5f6c7b;
    font-size: 1.1rem;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, #3da9fc, #1a73e8);
  }
`;

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Step = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #3da9fc, #1a73e8);
    border-radius: 0 0 16px 16px;
  }
`;

export const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3da9fc 0%, #1a73e8 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 10px rgba(61, 169, 252, 0.3);
`;

export const StepIcon = styled.div`
  color: #3da9fc;
  margin-bottom: 1.5rem;
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const StepContent = styled.div`
  padding: 0 1rem;
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #094067;
  font-weight: 600;
`;

export const StepDescription = styled.p`
  color: #5f6c7b;
  line-height: 1.6;
  font-size: 1rem;
`;