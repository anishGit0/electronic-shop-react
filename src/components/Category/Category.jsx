import React from 'react';
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/speaker.png"
import Button from '../Shared/Button';

function Category() {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* first column*/}
          <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white relative rounded-2xl h-[320px] flex items-end mb-5'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-200'>Enjoy</p>
                <p className='font-semibold text-2xl mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>
                  Earphone
                </p>
                <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"}/>
              </div>
            </div>
            <img src={Image1} alt='' className='w-[320px] absolute top-1/2 -translate-y-1/2 right-px'/>
          </div>
          {/* second column */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/60 text-white relative rounded-2xl h-[320px] flex items-end mb-5'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-black/85'>Enjoy</p>
                <p className='font-semibold text-2xl mb-[2px] text-black/85'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 text-black/90 mb-2'>Gadget</p>
                <Button text="Browse" bgColor={"bg-white/85"} textColor={"text-brandYellow"}/>
              </div>
            </div>
            <img src={Image2} alt='' className='w-[320px] absolute top-1/2 -translate-y-3/4 right-px'/>
          </div>
          {/* third column */}
          <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/60 text-white relative rounded-2xl h-[320px] flex items-end mb-5'>
            <div>
              <div className='mb-4'>
                <p className='text-black/85'>Enjoy</p>
                <p className='font-semibold text-2xl text-black/85'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 text-black/90'>Laptop</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-primary"}/>
              </div>
            </div>
            <img src={Image3} alt='' className='w-[210px] absolute top-1/2 -translate-y-3/4 right-px'/>
          </div>
          {/* fourth column */}
          {/* <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/60 text-white relative rounded-2xl h-[320px] flex items-end mb-5'>
            <div>
              <div className='mb-4'>
                <p className='text-black/85'>Enjoy</p>
                <p className='font-semibold text-2xl text-black/85'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 text-black/90'>Speaker</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandBlue"}/>
              </div>
            </div>
            <img src={Image4} alt='' className='w-[200px] absolute top-1/2 -translate-y-3/4 right-px'/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Category;
