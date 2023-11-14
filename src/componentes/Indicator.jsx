
import React from 'react';
import styled from 'styled-components';

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: ${(props) => (props.isActive ? '15px' : '10px')};
  height: ${(props) => (props.isActive ? '10px' : '10px')};
  border-radius: ${(props) => (props.isActive ? '40%' : '50%')};
  margin: 0 5px;
  background-color: ${(props) => (props.isActive ? '#222' : '#ddd')};
  cursor:pointer;
`;

const Indicator = ({ totalSteps, step, onDotClick }) => (

    <IndicatorContainer>
    {Array.from({length:totalSteps}).map((_, index) => (
      <Dot key={index} isActive={index === step} onClick={() => onDotClick(index)} />
    ))}
  </IndicatorContainer>
);

export default Indicator;