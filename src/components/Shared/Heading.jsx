import React from 'react'

function Heading({title, subtitle}) {
  return (
    <div className='text-center mt-1 max-w-[600px] mx-auto space-y-2'>
        <h1 className='text-3xl font-bold lg:text-4xl'>{title}</h1>
        <p className='text-sm text-gray-400 font-semibold'>{subtitle}</p>
    </div>
  )
}

export default Heading