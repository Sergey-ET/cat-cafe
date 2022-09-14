import React from 'react';
import Title from '/src/components/ui/title/title';
import StarCard from '/src/components/ui/star-card/star-card';
import Button from '/src/components/ui/button/button';
import { AppRoute } from '/src/const';
import { StyledStarsList, StarList, StarItem } from './styles';

function StarsList({ stars, level }) {
  return (
    <StyledStarsList>
      {stars?.length ? (
        <>
          <Title level={level}>Наши звезды</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard {...star} />
              </StarItem>
            ))}
          </StarList>
          <Button minWidth={353} link={AppRoute.BUY}>
            Купить билет
          </Button>
        </>
      ) : null}
    </StyledStarsList>
  );
}

export default StarsList;
