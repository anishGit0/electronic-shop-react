import React from 'react';
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/mobile.png";
import Image4 from "../../assets/category/tab.png";
import Button from '../Shared/Button';

function Category2() {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* first column*/}
          <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-brandWhite to-brandWhite text-white relative rounded-2xl h-[320px] flex items-end mb-5'>
            <div>
              <div className='mb-4'>
                <p className='text-black/85'>Enjoy</p>
                <p className='font-semibold text-2xl text-black/85'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 text-black/90'>Mobile</p>
                <Button text="Browse" bgColor={"bg-secondary"} textColor={"text-brandWhite"}/>
              </div>
            </div>
            <img src={Image3} alt='' className='w-[230px] absolute top-1/2 -translate-y-3/4 right-px'/>
          </div>
          {/* second column */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/60 text-white relative rounded-2xl h-[320px] flex items-end mb-5'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-black/85'>Enjoy</p>
                <p className='font-semibold text-2xl mb-[2px] text-black/85'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 text-black/90 mb-2'>VR</p>
                <Button text="Browse" bgColor={"bg-white/85"} textColor={"text-brandGreen"}/>
              </div>
            </div>
            <img src={Image2} alt='' className='w-[200px] absolute top-1/2 -translate-y-3/4 right-px'/>
          </div>
          {/* third column */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/60 text-white relative rounded-2xl h-[320px] flex items-end mb-5'>
            <div>
              <div className='mb-4'>
                <p className='text-black/85'>Enjoy</p>
                <p className='font-semibold text-2xl text-black/85'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 text-black/90'>Speaker</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandBlue"}/>
              </div>
            </div>
            <img src={Image4} alt='' className='w-[200px] absolute top-1/2 -translate-y-3/4 right-px'/>
          </div>
          {/* fourth column */}
          {/* <div className='py-10 pl-5 bg-gradient-to-br from-black/50 to-primary/80 text-white relative rounded-2xl h-[320px] flex items-end mb-5'>
            <div>
              <div className='mb-4'>
                <p className='text-black/85'>Enjoy</p>
                <p className='font-semibold text-2xl text-black/85'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 text-black/90'>Tablet</p>
                <Button text="Browse" bgColor={"bg-brandWhite"} textColor={"text-brandBlue"}/>
              </div>
            </div>
            <img src={Image4} alt='' className='w-[180px] absolute top-1/2 -translate-y-3/4 right-px'/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Category2;
