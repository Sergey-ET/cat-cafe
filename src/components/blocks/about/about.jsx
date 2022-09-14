import React from 'react';
import Title, { TitleSize } from '/src/components/ui/title/title';
import { StyledSection, Text, WorkTime, Address } from './styles';

function About({ level }) {
  return (
    <StyledSection>
      <Title level={level} size={TitleSize.BIG}>
        Первое в России котокафе
      </Title>
      <Text>
        Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
        из них ищет новый дом. Животных можно гладить, фотографировать, играть с
        ними.
      </Text>
      <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
      <Address>
        Санкт-Петербург, набережная реки Карповки, дом 5, литера П
      </Address>
    </StyledSection>
  );
}

export default About;
