
import Content from '../components/Content'
import Slider from '../components/Slider'
import './DefaultLayout.scss'

const DefaultLayout = () => {
  return (
    <body className='wrapper'>
      <Content></Content>
      <Slider></Slider>
    </body>
  )
}

export default DefaultLayout