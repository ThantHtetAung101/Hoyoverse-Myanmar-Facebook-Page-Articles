import React, { useState } from 'react'
import logo from '../images/logo.png'

const Navbar = ({ tagSearch }) => {
  const [activeTag, setActiveTag] = useState('all')
  const searchByTag = (tag) => {
    tagSearch(tag)
    setActiveTag(tag)
    if (activeTag) {
      const prevActiveTag = document.querySelector(`.${activeTag}`);
      if (prevActiveTag) {
        prevActiveTag.classList.remove('bg-purple-500');
        prevActiveTag.classList.add('bg-purple-300');
      }
    }

    const currentTag = document.querySelector(`.${tag}`);
    if (currentTag) {
      currentTag.classList.remove('bg-purple-300');
      currentTag.classList.add('bg-purple-500');
    }

    setActiveTag(tag);
  }
  return (
    <nav className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between ms-5 mt-5'>
      <img src={logo} alt="logo" className='max-w-[200px]' />
      <div className="mobile-tag grid sm:hidden grid-cols-4 gap-3 w-[300px] relative mt-5 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
        <button onClick={() => { searchByTag('all') }} className={`all ${activeTag == 'all' ? 'bg-purple-500' : 'bg-purple-300'} text-white rounded-xl h-[35px] w-[100px] flex justify-center items-center shadow pointer-cursor`}>All</button>
        <button onClick={() => { searchByTag('lore') }} className={`lore ${activeTag == 'lore' ? 'bg-purple-500' : 'bg-purple-300'} text-white rounded-xl h-[35px] w-[100px] flex justify-center items-center shadow pointer-cursor`}>Lores</button>
        <button onClick={() => { searchByTag('guide') }} className={`guide ${activeTag == 'guide' ? 'bg-purple-500' : 'bg-purple-300'} text-white rounded-xl h-[35px] w-[100px] flex justify-center items-center shadow pointer-cursor`}>Guides</button>
        <button onClick={() => { searchByTag('leak') }} className={`leak ${activeTag == 'leak' ? 'bg-purple-500' : 'bg-purple-300'} text-white rounded-xl h-[35px] w-[100px] flex justify-center items-center shadow pointer-cursor`}>Leaks</button>
        <button onClick={() => { searchByTag('new') }} className={`new ${activeTag == 'new' ? 'bg-purple-500' : 'bg-purple-300'} text-white rounded-xl h-[35px] w-[100px] flex justify-center items-center shadow pointer-cursor`}>News</button>
        <button onClick={() => { searchByTag('meme') }} className={`meme ${activeTag == 'meme' ? 'bg-purple-500' : 'bg-purple-300'} text-white rounded-xl h-[35px] w-[100px] flex justify-center items-center shadow pointer-cursor`}>Memes</button>
        <button onClick={() => { searchByTag('scaling') }} className={`scaling ${activeTag == 'scaling' ? 'bg-purple-500' : 'bg-purple-300'} text-white rounded-xl h-[35px] w-[100px] flex justify-center items-center shadow pointer-cursor`}>Scalings</button>
        <button onClick={() => { searchByTag('theory') }} className={`theory ${activeTag == 'theory' ? 'bg-purple-500' : 'bg-purple-300'} text-white rounded-xl h-[35px] w-[100px] flex justify-center items-center shadow pointer-cursor`}>Theories</button>
        {/* <input type="text" className='w-full h-[50px] ps-5 rounded-full border-2 focus:outline-purple-500 inter' placeholder='Search' />
            <i className="fa-solid fa-magnifying-glass absolute right-6 bottom-4 sm:bottom-6 md:bottom-6 lg:bottom-6 xl:bottom-6 text-gray-500"></i> */}
      </div>
    </nav>
  )
}

export default Navbar