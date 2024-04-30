import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { BsCartFill } from "react-icons/bs";
import DarkMode from './DarkMode';
import { FaCaretDown } from 'react-icons/fa';
import Image from '../../assets/website/INTEX.png'

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  // {
  //   id: 2,
  //   name: "About",
  //   link: "/#about"
  // },
  {
    id: 2,
    name: "Shop",
    link: "/#shop"
  },
  {
    id: 3,
    name: "Blogs",
    link: "/#blogs"
  }
]

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "#"
  },
  {
    id: 2,
    name: "Best Selling",
    link: "#"
  },
  {
    id: 3,
    name: "Top Rated",
    link: "#"
  }
]

function Navbar({handlePopup}) {
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white duration-100 relative z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center">
          {/* logo section*/}
          <div className='flex items-center gap-5'>
            <a href='#' 
            className='text-2xl text-primary font-semibold tracking-wider uppercase 
            sm:text-3xl'>
              <img src={Image} className='w-[150px] h-[60px]'/>
            </a>
            {/* Menu */}
            <div className='hidden lg:block'>
              <ul className='flex flex-wrap gap-5 items-center'>
                {
                  MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link}
                      className='inline-block px-4 font-semibold text-gray-500 
                      hover:text-black dark:hover:text-white duration-200'
                      >
                        {" "}
                        {data.name}
                      </a>
                    </li>
                  ))
                }
                {/* Dropdown feature */}
                <li className='group cursor-pointer relative'>
                  <a href="" className="flex items-center gap-2 font-semibold text-gray-500
                    dark:hover:text-white py-2 hover:text-black">
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                    </span>
                  </a>
                  {/* Dropdown links */}
                  <div className='absolute hidden z-[9999] group-hover:block w-[200px]
                  rounded-md bg-white shadow-md dark:bg-gray-800 p-2 dark:text-black'>
                    <ul className='space-y-2'>
                      {
                        DropdownLinks.map((data, index) => (
                          <li key={index}>
                            <a href={data.link}
                            className='text-gray-500 inline-block rounded-md font-semibold
                            hover:text-black dark:hover:text-white duration-200 p-2 
                            hover:bg-primary/20 w-full '
                            >
                              {data.name}
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar */}
          <div className='flex justify-between items-center gap-4'>
            {/* Search bar */}
              <div className='relative group hidden sm:block'>
                <input type='text' placeholder='search' 
                className='search-bar'
                />
                <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400
                absolute top-1/2 -translate-y-1/2 right-2 group-hover:text-primary duration-200'/>
              </div>
              {/* cart button */}
              <button className='p-3 relative' onClick={handlePopup}>
                <BsCartFill className='text-xl text-gray-700 dark:text-gray-600'/>
                <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute
                top-0 right-0 flex items-center justify-center text-xs'>

                </div>
              </button>
            {/* Dark mode */}
              <div>
                <DarkMode />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar