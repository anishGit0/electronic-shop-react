import React from 'react'

function Button({text, bgColor, textColor, handler = () => {}}) {
  return (
    <button 
    onClick={handler}
    className={`${bgColor} ${textColor} cursor-pointer duration-300 hover:scale-100
    py-3 px-8 rounded-full z-10 relative`}>
        {text}
    </button>
  )
}

export default Button