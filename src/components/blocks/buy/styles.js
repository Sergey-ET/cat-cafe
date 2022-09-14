import styled, { css } from 'styled-components';
import { Section } from '/src/components/styled';
import buyLeft from '/src/assets/buy-left.svg';
import buyRight from '/src/assets/buy-right.svg';
import buyImage from '/src/assets/buy-cat.svg';
import Title from '/src/components/ui/title/title';

export const StyledSection = styled(Section)`
  display: block;
  min-height: 786px;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  background-image: url(${buyLeft});
  background-position: left bottom;
  background-size: 349px 406px;
  background-repeat: no-repeat;

  &::before {
    position: absolute;
    content: '';
    top: 175px;
    right: 94px;
    width: 443px;
    height: 468px;
    background-image: url(${buyRight});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    content: '';
    top: 277px;
    right: 90px;
    width: 447px;
    height: 409px;
    background-image: url(${buyImage});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const StyleTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const FormItem = styled.div`
  margin-bottom: ${(props) => `${props.$bottom || 24}px`};
`;

export const Price = styled.span`
  display: block;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 115%;
  font-weight: 700;
`;

export const RadioLabelForTime = styled.span`
  display: flex;
  height: 44px;
  width: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
  ${(props) =>
    props.$isChecked
      ? css`
          background-color: ${props.theme.colorForButton};
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorGray};
          color: ${props.theme.colorBlackForText};
          cursor: pointer;
        `}
`;

export const RadioLabelForType = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 420px;
  height: 100%;
  margin-left: -20px;
  padding-left: 46px;
  padding-top: 11px;
  padding-bottom: 10px;
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    display: block;
    left: 20px;
    height: 17px;
    width: 17px;
    border: 1px solid ${(props) => props.theme.colorForButton};
    border-radius: 50%;
  }

  ${(props) =>
    props.$isChecked &&
    `
    &::after {
      position: absolute;
      content: "";
      display: block;
      left: 23px;
      height: 13px;
      width: 13px;
      background-color: ${props.theme.colorForButton};
      border-radius: 50%;
    }
  `}
`;

export const AccordionText = styled.div`
  font-size: 14px;
  line-height: 21px;

  & ul {
    margin: 0;
    padding: 0;
    margin-left: 16px;
  }

  & li {
    list-style-type: disc;
  }
`;
