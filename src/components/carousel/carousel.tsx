import { useState } from "react";
import {
  Carousel as Slider,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import slider1 from "../../assets/carousel/slider1.jpg";
import slider2 from "../../assets/carousel/slider2.jpg";
import slider3 from "../../assets/carousel/slider3.jpg";
import "./carousel.css";

const items = [
  {
    src: slider1,
    altText: "Get flat 10% Cashbook",
    caption: "The Big Sale",
  },
  {
    src: slider2,
    altText: "Get flat 10% Cashbook",
    caption: "The Big Sale",
  },
  {
    src: slider3,
    altText: "Get flat 10% Cashbook",
    caption: "The Big Sale",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  let animating: any;

  const onExiting = () => {
    animating = true;
  };
  const onExited = () => {
    animating = false;
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = () => {
    if (animating) return;
    // setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
        <img className="carousel-images" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <Slider activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Slider>
  );
};

export default Carousel;
