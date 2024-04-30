import React, { useEffect, useState } from 'react'
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? 
    localStorage.getItem("theme") : "light")

  const element = document.documentElement;
  console.log(element)

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (localStorage.theme === 'dark') {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='relative'>
      <img onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={LightButton} alt=''
      className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-400 
      ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      src={DarkButton} alt=''
      className={`w-12 cursor-pointer `}
      />
    </div>
  )
}

export default DarkMode