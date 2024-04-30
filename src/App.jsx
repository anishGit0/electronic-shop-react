import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Service/Services'
import Banner from './components/Banner/Banner'
import headphone from './assets/hero/headphone.png'
import smartwatch from './assets/category/smartwatch2-removebg-preview.png'
import Product from './components/Product/Product'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from 'aos';
import 'aos/dist/aos.css'

const BannerData = 
  {
    discount: "30% off",
    title: "Fine smile",
    date: "10 Jan to 31 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter sale",
    title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, blanditiis",
    bgColor: "#f42c37"
  }

const BannerData1 = {
  discount: "30% off",
  title: "Happy Hours",
  date: "20 Jan to 30 Jan",
  image: smartwatch,
  title2: "Smart Solo",
  title3: "Winter sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, blanditiis",
  bgColor: "#2dcc6f"
}


function App() {
  const [orderPopup, setOrderPopup] = React.useState(false)

  const handlePopup = () => {
    setOrderPopup(!orderPopup)
  }

  React.useEffect(() => {
    AOS.init(
      {
        duration: 900,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100
      }
    )
    AOS.refresh();
  }, [])

  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white duration-200 
    overflow-hidden'>
      <Navbar handlePopup={handlePopup}/>
      <Hero handlePopup={handlePopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Product />
      <Banner data={BannerData1}/>
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handlePopup={handlePopup}/>
    </div>
  )
}

export default App
