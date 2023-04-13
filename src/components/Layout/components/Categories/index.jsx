import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Categories.scss"
// import required modules
import { Navigation } from "swiper";

import DATA3 from "./cateData/cateData";

export default function Categories() {
  return (
    <div className="cate-wrapper">
      <div className='line1'></div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={6}
        className="mySwiper"
      >
        <div className="slide-header">
                    <div className="slide-header--container">
                        <div className="slide-header--tag">
                            <div className="slide-marker"></div>
                            <span className="slide-header--type">Categories</span>
                        </div>
                        <span className="slide-header--title">Browser By Categories</span>
                    </div>
                </div>
        {
          DATA3.map((item) => {
            return (
              <SwiperSlide>
                <div className="cate-container">
                  <div className="cate-content">
                    <img className="cate-img" src={item.icon} alt="icon" />
                    <span className="cate-name">{item.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}