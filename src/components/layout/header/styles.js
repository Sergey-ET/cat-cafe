import styled from 'styled-components';
import { Section } from '/src/components/styled';

export const StyledSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: ${(props) => props.theme.pageWidth};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 1;
`;
