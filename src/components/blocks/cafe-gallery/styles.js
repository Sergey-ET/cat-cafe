import styled from 'styled-components';
import { Section } from '/src/components/styled';
import Title from '/src/components/ui/title/title';
import galleryImage from '/src/assets/gallery-leg.svg';
import galleryLeft from '/src/assets/gallery-left.svg';
import galleryRight from '/src/assets/gallery-right.svg';

export const StyledSection = styled(Section)`
  display: block;
  padding-top: 79px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${galleryRight});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 113px;
    height: 144px;
    background-image: url(${galleryLeft});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    content: '';
    top: 82px;
    right: 0;
    width: 225px;
    height: 222px;
    background-image: url(${galleryImage});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;
