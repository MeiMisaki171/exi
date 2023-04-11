import Footer from '~/components/Layout/components/Footer'
import './Home.scss'
import Header from '~/components/Layout/components/Header'
import Line from '~/components/Layout/components/Line'
import DefaultLayout from '~/components/Layout/Defaultlayout'

const Home = () => {
  return (
    <>
      <Header></Header>
      <Line></Line>
      <DefaultLayout></DefaultLayout>
      <Footer></Footer>
    </>
  )
}

export default Home