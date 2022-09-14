import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 207px;
  text-decoration: none;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: ${(props) => props.theme.colorBlackForText};
`;
