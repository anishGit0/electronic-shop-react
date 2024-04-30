import React from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        substitle: "Beat Solo",
        title: "Wireless",
        title2: "Headphone",
    }, 
    {
        id: 2,
        img: Image2,
        substitle: "Beat Solo",
        title: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        img: Image3,
        substitle: "Apple Macbook",
        title: "Branded",
        title2: "Laptop",
    }
]

function Hero ({handlePopup}) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true
    };

  return (
    <div className='container'>
        <div className='overflow-hidden rounded-md min-h-[500px] sm:min-h-[600px] hero-bg-color
        flex justify-center items-center'
        >
            <div className='container pb-7 sm:pb-0'>
                <Slider {...settings}>
                    {
                        HeroData.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* Text section */}
                                    <div className='flex flex-col justify-center gap-4 
                                    sm:pl-3 pt-10 sm:pt-0 text-center sm:text-left order-2
                                    sm:order-1 relative z-10'>
                                        <h1 className='text-2xl sm:text-5xl lg:text-2xl 
                                        font-bold' data-aos="zoom-out" data-aos-duration="500"
                                        data-aos-once="true" >
                                            {data.substitle}
                                        </h1>
                                        <h1 className='text-4xl sm:text-6xl lg:text-7xl
                                        font-bold' data-aos="zoom-out" data-aos-duration="500"
                                        data-aos-once="true">
                                            {data.title}
                                        </h1>
                                        <h1 className='text-4xl uppercase text-white 
                                        dark:text-white/5 sm:text-[70px] md:text-[90px]
                                        xl-text-[150px] font-bold' 
                                        data-aos="zoom-out" 
                                        data-aos-duration="500"
                                        data-aos-once="true">
                                            {data.title2}
                                        </h1>
                                        <div className='pt-5'
                                        data-aos= "fade-up"
                                        data-aos-delay= "300"
                                        data-aos-offset= "0"
                                        data-aos-duraton= "500">
                                            <Button text="Shop now" bgColor="bg-primary"
                                            textColor="text-white" 
                                            handler={handlePopup}/>
                                        </div>
                                    </div>

                                    {/* Image section */}
                                    <div className='order-1 sm:order-2'>
                                        <div data-aos="zoom-in" dat-aos-once="true"
                                        className='relative z-10'>
                                            <img src={data.img} alt='' 
                                            className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]
                                            sm:scale-105 lg:scale-110 mx-auto object-contain
                                            drop-shadow-[-8px_4px_6px_rgba(0, 0 , 0, 0.3)] relative
                                            z-40'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero 