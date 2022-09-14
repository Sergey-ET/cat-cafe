import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  display: block;
  min-width: ${(props) => `${props.$minWidth}px` || '100%'};
  max-width: 700px;
  min-height: 60px;
  padding: 16px 0;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: 150%;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  background-image: none;
  text-align: center;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: none;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;
