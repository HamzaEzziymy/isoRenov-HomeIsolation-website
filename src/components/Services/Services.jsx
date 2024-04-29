import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Services.css";
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <div id="services" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="redText">Notre Services</span>
          <span className="primaryText">Ci-dessous les services que nous proposons</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  {/* <span style={{ color: "orange" }}>$</span> */}
                  {/* <span>{card.price}</span> */}
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
                {i===2&&<div className="more"></div>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
