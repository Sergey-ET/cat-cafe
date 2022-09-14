import styled from 'styled-components';
import { Section } from '/src/components/styled';
import aboutImage from '/src/assets/about.svg';
import mapMark from '/src/assets/map-mark.svg';

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

export const StyledSection = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  padding-right: 590px;
  padding-bottom: 159px;
  padding-left: ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorForLightBackground};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: ${(props) => props.theme.pagePadding};
    bottom: 0;
    transform: translateY(-50%);
    width: 446px;
    height: 446px;
    background-image: url(${aboutImage});
  }
`;

export const Text = styled(Paragraph)`
  max-width: 528px;
  margin-top: ${(props) => props.theme.indent};
  margin-bottom: 40px;
`;

export const WorkTime = styled(Paragraph)`
  width: 293px;
  margin: 0;
  margin-bottom: ${(props) => props.theme.indent};
  padding: 8px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  border-radius: 8px;
`;

export const Address = styled(Paragraph)`
  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background-image: url(${mapMark});
  }
`;
