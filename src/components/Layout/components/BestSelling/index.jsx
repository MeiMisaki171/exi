// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './BestSelling.scss'

import DATA4 from "./BsData/BsData";

import PrettyRating from 'pretty-rating-react';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const icons = {
 star: {
  complete: faStar,
  half: faStarHalfAlt,
  empty: farStar,
 },
};

const colors = {
 star: ['#FFAD33', '#FFAD33', '#e3d6d6'],
};

const BestSelling = () => {
  return (
      <div className="bs-wrapper">
          <div className='line1'></div>
          <Swiper
              navigation={true}
              slidesPerView={4}
              modules={[Navigation]}
              className="mySwiper"
          >
              <div className="slide-header">
                    <div className="slide-header--container">
                        <div className="slide-header--tag">
                            <div className="slide-marker"></div>
                            <span className="slide-header--type">This Month</span>
                        </div>
                        <span className="slide-header--title">Best Selling Products</span>
                    </div>
              </div>
              {
                  DATA4.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                          <div className="fs-wrapper">
                              <div className="fsitems-header">
                                  <div className="fs-img--wrapper">
                                      <img className="fs-img" src={item.img} alt="img" />
                                  </div>
                                  <div className="fs-icon--wrapper">
                                      <div className="fs-icon--container">
                                          <img src={item.heart} alt="heart" className="fs-icon"/>
                                      </div>
                                      <div className="fs-icon--container">
                                          <img src={item.eye} alt="eye" className="fs-icon"/>
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
                                      <div className="fs-star">
                                          <PrettyRating
                                              value={item.star}
                                              icon={icons.star}
                                              colors={colors.star}
                                              onChange={(newValue) => {
                                                  console.log('new value: ', newValue);
                                              }}
                                          /> 
                                      </div>
                                      <div className="fs-num">{item.number}</div>
                                  </div>
                              </div>    
                          </div>
                        </SwiperSlide>
                      )
                  })
              }
          </Swiper>
      </div>
  )
}

export default BestSelling