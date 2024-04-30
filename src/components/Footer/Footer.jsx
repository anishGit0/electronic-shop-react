import React from 'react';
import Image from '../../assets/website/INTEX.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "Contact", link: "/#contact" },
    { title: "Blogs", link: "/#blogs" },
    { title: "About", link: "/#about"}
];

function Footer() {
    return (
        <div className='dark:bg-gray-900'>
            <div className="container py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 px-4">
                        <h1 className="text-2xl text-primary font-semibold tracking-wider uppercase mb-4">
                            <img src={Image} alt='' className='w-[200px] h-[80px]'/>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consectetur iusto eos eius velit nostrum molestias voluptas ab necessitatibus et!
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-4 font-extrabold">Made by Anish</p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 gap-4 md:pl-10">
                        <div className="px-4">
                            <h1 className="text-2xl font-bold mb-4">Links</h1>
                            <ul className="space-y-2">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="text-gray-600 hover:text-black dark:hover:text-white transition-colors duration-300">
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="px-4">
                            <h1 className="text-2xl font-bold mb-4">Address</h1>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <FaLocationArrow className="mr-2" />
                                    <p>Kolkata, West Bengal</p>
                                </div>
                                <div className="flex items-center">
                                    <FaMobileAlt className="mr-2" />
                                    <p>+91-8961000239</p>
                                </div>

                                {/* social Links */}
                                <div className='flex items-center gap-3 mt-6'>
                                    <a href='#'>
                                        <FaInstagram className='text-3xl hover:text-primary
                                        duration-300'/>
                                    </a>
                                    <a href='#'>
                                        <FaFacebook className='text-3xl hover:text-brandBlue
                                        duration-300'/>
                                    </a>
                                    <a href='#'>
                                        <FaLinkedin className='text-3xl hover:text-brandBlue
                                        duration-300'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;