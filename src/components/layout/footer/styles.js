import styled from 'styled-components';
import { Section } from '/src/components/styled';

export const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: ${(props) => props.theme.pageWidth};
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorWhite};
`;

export const Copyright = styled.span`
  padding: 8px 12px;
  text-align: center;
  background-color: ${(props) => props.theme.colorForLightBackground};
  border-radius: 8px;
`;
