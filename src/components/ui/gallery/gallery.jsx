import React, { useState, useRef } from 'react';
import { Navigation, Thumbs } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { ReactComponent as LeftArrow } from '/src/assets/left-arrow.svg';
import {
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  SliderWrapper,
  StyleSlideMini,
  StyledButtonLeft,
  StyledButtonRight,
  RightArrow
} from './styles';

function Gallery({ slides = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <StyledSwiper
        onSlideChange={(slider) => {
          setActiveSlide(slider.realIndex);
        }}
        modules={[Thumbs]}
        spaceBetween={20}
        loop
        thumbs={{ swiper: thumbsSwiper }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyleSlide
              src={slide.src}
              alt={slide.alt}
              width={726}
              height={408}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          modules={[Navigation, Thumbs]}
          spaceBetween={20}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          loop
          onSwiper={setThumbsSwiper}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyleSlideMini
                $active={activeSlide === index}
                src={slide.src}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigationNextRef}>
          <RightArrow />
        </StyledButtonRight>
      </SliderWrapper>
    </>
  );
}

export default Gallery;
