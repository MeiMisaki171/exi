import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper'
import './Slider.scss'
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DATA2 from '~/components/Layout/components/Slider/Data2/Data2'
const Slider = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="Slider">
          {
              DATA2.map((dataItem) => {
                  return (
                    <SwiperSlide>
                    <div className="slide-wrapper">
                      <div className="slide-content">
                        <div className="slider-product">
                            <img className="slider-icon" src= {dataItem.icon} alt="icon"></img>
                            <div className="slider-name">{dataItem.name}</div>
                        </div>
                        <div className="slider-sale">{dataItem.sale}</div>
                        <a className="slider-link" href={dataItem.link}>
                            <span className="slider-link--string">Shop now</span>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="slider-link--icon"
                            ></FontAwesomeIcon>
                        </a>
                      </div>
                      <img className="slider-img" src={dataItem.img} alt='img' ></img>
                    </div>
                </SwiperSlide>
                  )
              })}
     </Swiper>        
  )
}
export default Slider