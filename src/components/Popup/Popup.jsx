import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import Button from '../Shared/Button';

function Popup({orderPopup, handlePopup}) {
  return (
    <>
        {
            orderPopup && (
                <div>
                    <div className='h-screen w-screen top-0 fixed left-0 bg-black-50 z-50 backdrop-blur-sm'>
                        <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        p-4 shadow-md bg-white dark:bg-gray-800 dark:text-white duration-200
                        rounded-lg'>
                            {/* Header section */}
                            <div className='flex items-center justify-between'>
                                <h1 className='font-semibold'>Order Now</h1>
                                <div>
                                    <IoCloseCircle onClick={handlePopup}
                                    className='text-2xl cursor-pointer '/>
                                </div>
                            </div>
                            {/* Form section */}
                            <div className='mt-5'>
                                <input 
                                type='text' placeholder='name'
                                className='form-input'/>
                                <input 
                                type='email' placeholder='email'
                                className='form-input'/>
                                <input 
                                type='text' placeholder='address'
                                className='form-input'/>
                                <div className='flex justify-center'>
                                    <Button text="Order Now" bgColor={"bg-brandGreen"}
                                    handleClick={handlePopup}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default Popup