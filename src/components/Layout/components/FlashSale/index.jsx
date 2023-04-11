// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './FlashSale.scss'
import FLSDATA from "../FlashSale/FlashSaleData/FlsData";

const FlashSale = () => {
  return (
      <Swiper
          navigation={true}
          slidesPerView={4}
          modules={[Navigation]}
          className="mySwiper"
      >
          {
              FLSDATA.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="fs-wrapper">
                        <div className="fsitems-header">
                            <div className="percent">{item.percent}</div>
                            <div className="fs-img--wrapper">
                                <img className="fs-img" src={item.img} alt="img" />
                            </div>
                            <div className="fs-icon-wrapper">
                                <div className="fs-icon">
                                    <img src={item.heart} alt="heart" />
                                </div>
                                <div className="fs-icon">
                                    <img src={item.eye} alt="eye" />
                                </div>
                            </div>
                            <div className="fs-button">{item.button}</div>
                        </div>

                        <div className="fsitems-footer">
                            <div className="fs-title">{item.title}</div>
                            <div className="fs-price">
                                <div className="price">{item.price}</div>
                                <div className="old-price">{item.oldprice}</div>
                            </div>
                            <div className="fs-rate">
                                <div className="fs-star">{item.star}</div>
                                <div className="fs-num">{item.number}</div>
                            </div>
                        </div>    
                    </div>
                  </SwiperSlide>
                )
              })
  
        }
    </Swiper>
  );
}

export default FlashSale;