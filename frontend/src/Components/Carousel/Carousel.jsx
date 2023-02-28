import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import style from "./Carousel.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<div className={style.Carouselcontainer}>
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item className={style.big_img_container} >
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/1f/bb/a3/1fbba33b264bebfe122c9b6162523dd9.jpg"
          alt="First slide"
          height={"50%"}
        />

      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"
          alt="Second slide"
          loading='lazy'

        />
     </Carousel.Item>


    </Carousel>
  </div>
  );
}

