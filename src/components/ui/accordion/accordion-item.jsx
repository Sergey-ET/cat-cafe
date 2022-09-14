import React, { useState, useEffect, useRef } from 'react';
import { TitleWrapper, Button, Arrow, Wrapper, ContentWrapper } from './styles';

function AccordionItem({
  titleComponent,
  textComponent,
  title,
  text,
  open,
  onClick,
  isHtml
}) {
  const [height, setHeight] = useState(0);
  const TitleComponent = titleComponent;
  const TextComponent = textComponent || 'div';
  const contentWrapper = useRef(null);

  useEffect(() => {
    setHeight(contentWrapper.current.offsetHeight);
  }, [text]);

  return (
    <>
      <TitleWrapper open={open}>
        {TitleComponent ? <TitleComponent>{title}</TitleComponent> : title}
        <Button
          type="button"
          onClick={onClick}
          title={`${open ? 'Скрыть' : 'Раскрыть'} описание`}
        >
          <Arrow open={open} />
        </Button>
      </TitleWrapper>
      <Wrapper height={height} open={open}>
        <ContentWrapper ref={contentWrapper}>
          {' '}
          {isHtml ? (
            <TextComponent dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <TextComponent>{text}</TextComponent>
          )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default AccordionItem;
