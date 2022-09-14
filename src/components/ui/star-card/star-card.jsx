import React from 'react';
import Title, { TitleSize, TitleLevel } from '/src/components/ui/title/title';
import { StyledStarCard, StyledStarIcon, Figure, Image, Text } from './styles';

function StarCard({ name, about, feature, image }) {
  return (
    <StyledStarCard>
      <Figure>
        <Image src={image} width={313} height={320} alt="изображение кота" />
        <StyledStarIcon feature={feature} />
      </Figure>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
        {name}
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </StyledStarCard>
  );
}

export default StarCard;
