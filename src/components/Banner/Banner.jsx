import React from 'react'

function Banner({data}) {
  return (
    <div className='min-h-[550px] py-11 flex justify-center items-center pt-0'>
        <div className='container'>
            <div style={{backgroundColor: data.bgColor}} className='grid grid-cols-1 md:grid-cols-3 gap-6 text-white items-center 
            rounded-md'>
                {/* first col */}
                <div className='p-6 sm:p-8'>
                    <p 
                    data-aos="slide-right"
                    className='text-md font-semibold'>{data.discount}</p>
                    <h1 data-aos="zoom-out" 
                    className='text-3xl uppercase lg:text-7xl font-bold'>
                        {" "}
                        {data.title}
                    </h1>
                    <p data-aos="fade-up" className='text-md font-semibold'>{data.date}</p>
                </div>
                {/* Second col */}
                <div data-aos="zoom-in" className='h-full flex items-center'>
                    <img src={data.image} alt='' className='scale-125 w-[250px] md:w-[340px]
                    mx-auto drop-shadow-2xl object-cover'/>
                </div>
                {/* Third col */}
                <div className='flex flex-col justyfy-center fap-4 p-6 sm:p-8'>
                    <p data-aos="zoom-out" className='font-semibold text-xl'>{data.title2}</p>
                    <p data-aos="fade-up" className='text-3xl sm:text-4xl font-bold mb-2'>{data.title3}</p>
                    <p data-aos="fade-up" className='text-md tracking-wide leading-5 mb-4'>{data.title4}</p>
                    <div data-aos="fade-up" data-aos-offset="0">
                        <button style={{color: data.bgColor}} 
                        className='bg-white py-2 px-4 rounded-full font-semibold'>
                            Shop now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner