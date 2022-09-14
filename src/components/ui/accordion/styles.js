import styled from 'styled-components';
import { Li } from '/src/components/styled';
import { ReactComponent as LeftArrow } from '/src/assets/left-arrow.svg';

export const StyledLi = styled(Li)`
  margin-bottom: 8px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${(props) => props.theme.colorGray};
  border-radius: 10px;
  z-index: 2;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-right: -5px;
  color: ${(props) => props.theme.colorBlackForText};
  background: none;
  border: 0;
  cursor: pointer;
`;

export const Arrow = styled(LeftArrow)`
  transform: rotate(${(props) => (props.open ? '90deg' : '-90deg')}) scale(0.7);
  transition: transform 0.2s ease-out;
`;

export const Wrapper = styled.div`
  position: relative;
  height: ${(props) => `${props.open ? props.height : 1}px`};
  padding-top: 10px;
  margin-top: -11px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colorGray};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: height 0.2s ease-out;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  padding-top: 10px;
  z-index: 1;
`;
