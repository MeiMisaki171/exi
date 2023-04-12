
import Content from '../components/Content'
import FlashSale from '../components/FlashSale'
import Slider from '../components/Slider'
import './DefaultLayout.scss'

const DefaultLayout = () => {
  return (
    <body className='body-wrapper'>
      <div className='body-container'>
        <Content></Content>
        <Slider></Slider>
      </div>
      <FlashSale></FlashSale>
      <div className='button-container'>
        <button className='button'>View All Products</button>
      </div>

      <div className='line1'></div>
    </body>
  )
}

export default DefaultLayout