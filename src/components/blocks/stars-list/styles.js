import styled from 'styled-components';
import { Section, Ul, Li } from '/src/components/styled';
import starsImage from '/src/assets/stars-leg.svg';
import starsLeft from '/src/assets/stars-left.svg';
import starsRight from '/src/assets/stars-right.svg';

export const StyledStarsList = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 90px 80px 90px;
  padding-top: 100px;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-bottom: 80px;
  padding-left: ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: URL(${starsLeft});

  &::before {
    content: '';
    position: absolute;
    top: 34px;
    left: -2px;
    width: 207px;
    height: 162px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: URL(${starsImage});
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 111px;
    height: 158px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: URL(${starsRight});
  }
`;

export const StarList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const StarItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;
