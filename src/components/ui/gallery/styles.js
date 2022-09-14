import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import Button from '/src/components/ui/button/button';
import { ReactComponent as LeftArrow } from '/src/assets/left-arrow.svg';

export const StyledSwiper = styled(Swiper)`
  width: 726px;
  height: 408px;
  margin-bottom: 24px;
  border-radius: 20px;
`;

export const StyledSwiperMini = styled(Swiper)`
  width: 726px;
  height: 128px;
`;

export const StyleSlide = styled.img`
  width: 726px;
  height: auto;
  border-radius: 20px;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 726px;
  margin: 0 auto;
`;

export const StyleSlideMini = styled.div`
  position: relative;
  width: 167px;
  height: 128px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 12px;
  filter: brightness(${(props) => (props.$active ? 100 : 50)}%);
  cursor: pointer;
`;

export const StyledButtonLeft = styled(Button)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: -95px;
  height: 64px;
  width: 64px;
  margin: auto;
  padding: 0;
  border-radius: 50%;

  &:hover {
    box-shadow: none;
  }
`;

export const StyledButtonRight = styled(StyledButtonLeft)`
  right: -95px;
  left: auto;
`;

export const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;
