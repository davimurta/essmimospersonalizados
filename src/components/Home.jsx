import Banners from './Banners/Banners'
import Header from './Header/Header'
import Benefits from './Benefits/Benefits'
import Carousel from './Carousel/Carousel'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <>
      <Header style="z-index: 1000;" />
      <Benefits />
      <Carousel />
      <Banners />
      <Footer />
    </>
  )
}

export default Home
