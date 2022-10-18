import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import {text} from "./text";

import React from 'react'
  
const TextSlider = ({text}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 5000,
  };
   return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
            {text.map((item) => (
            <div className="d-flex align-items-center justify-content-center" key={item.id}>
          <div className="testimonial-client mx-3 d-flex align-items-center justify-content">
            <div className="client-img__cover d-flex align-items-center justify-content-center shadow-sm"
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* <img className="client-image__main" src={"https://images.unsplash.com/photo-1666044443668-a80ea222040a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"}  alt={item.alt} /> */}
            </div>
            {/* <img className="client-image" src={item.src}  alt={item.alt} />q */}
            <div className="client-details">
              {/* <div className="client-title">{item.title}</div> */}
              <h3>{item.title}</h3>
              <div className="client-desc">{item.desc}</div>
            </div>
          </div>
          <div className="testimonial mx-3">
            {item.review}
          </div>
         
        </div>))}
        </Slider>
      </div>
    );
  }

export default TextSlider;

        