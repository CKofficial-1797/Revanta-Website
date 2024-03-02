import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import WholeTeam from "../../img/WholeTeam.jpg";
import RevantaGirls from "../../img/RevantaGirls.jpg"
import Electrical from "../../img/Electrical.jpg"
import Batch22 from "../../img/Batch22.jpg"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Team</span>
      <span>Members</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={WholeTeam} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RevantaGirls} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Electrical} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={Batch22} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
