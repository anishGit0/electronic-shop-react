import React from 'react'
import Heading from '../Shared/Heading'
import Image1 from '../../assets/blog/blog-1.jpg'
import Image2 from '../../assets/blog/blog-2.jpg'
import Image3 from '../../assets/blog/blog-3.jpg'

const BlogData = [
    {
        title: "How to choose perfect smartwatch",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore laborum blanditiis placeat in animi Culpa ullam nesciunt minus aspernatur impedit.",
        published: "24 January, 2022",
        img: Image1,
        aosDelay: "0"
    },
    {
        title: "How to choose perfect gadget",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore laborum blanditiis placeat in animi Culpa ullam nesciunt minus aspernatur impedit.",
        published: "20 January, 2022",
        img: Image2,
        aosDelay: "200"
    },
    {
        title: "How to choose perfect VR set",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore laborum blanditiis placeat in animi Culpa ullam nesciunt minus aspernatur impedit.",
        published: "10 January, 2022",
        img: Image3,
        aosDelay: "400"
    }
]

function Blogs() {
  return (
    <div className='my-12 mt-1'>
        <div className="container">
            {/* Heading */}
            <Heading title="Recent News" subtitle="Explore Our Blogs"/>

            {/* Blog */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-7 md:gap-8 my-5">
                {/* Blog cards */}
                {
                    BlogData.map((data) => (
                        <div key={data.title} className='bg-white dark:bg-gray-800
                        ' data-aos="fade-up" data-aos-delay={data.aosDelay}>
                            {/* Image section */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.img} alt=''
                                className='w-full h-[220px] object-cover rounded-2xl
                                hover:scale-110 duration-500'
                                />
                            </div>
                            {/* content section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500 font-semibold'>{data.title}</p>
                                <p className='font-bold line-clamp-2'>{data.subtitle}</p>
                                <p className='line-clamp-2 text-sm text-gray-600
                                dark:text-gray-400'>
                                    {data.published}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs