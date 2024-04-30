import React from 'react'
import Button from '../Shared/Button'

function ProductCard({data}) {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 place-items-center
        '>
            {/* card section */}
           {
                data.map((data) => (
                    <div key={data.id} className='group' data-aos="fade-up" 
                    data-aos-delay={data.aosDelay}>
                        <div className='relative'>
                            <img src={data.img} alt=''
                            className='h-[180px] w-[260px] object-cover rounded-md'
                            />
                            {/* hover section on image */}
                            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                            w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center
                            duration-200 hidden group-hover:flex rounded-md'>
                                <Button text="Add to cart" bgColor={"bg-primary"}
                                textColor={"text-white"}
                                />
                            </div>
                        </div>

                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>${data.price}</h2>
                        </div>
                    </div>
                ))
           } 
        </div>
    </div>
  )
}

export default ProductCard