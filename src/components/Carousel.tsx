import React, { FC } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Contianer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 50px;

  & .slick-center {
    transform: scale(1.2);
  }
`;

const Slide = styled.div`
  width: 300px;
  height: 600px;
  padding: 30px;
  box-sizing: border-box;
  transition: all 0.3s ease;
`;

const SlideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightblue;
`;


const Carousel: FC = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
    // dots: false,
    // centreMode: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1
  };
  return (   
    <Contianer>
      <Slider {...settings}>
        <Slide>
          <SlideContent>
            1
          </SlideContent>
        </Slide>
        <Slide>
          <SlideContent>
            <div>1 bit</div>
            <div>2 bit</div>
          </SlideContent>
        </Slide>
        <Slide>
          <SlideContent>
            <div>2</div>
          </SlideContent>
        </Slide>
        <Slide>
          <SlideContent>
            <div>1 bit</div>
            <div>2 bit</div>
          </SlideContent>
        </Slide>
      </Slider>
    </Contianer>
  );
}

export default Carousel;