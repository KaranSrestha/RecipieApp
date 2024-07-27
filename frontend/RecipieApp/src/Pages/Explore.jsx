import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import image from './Login/background.jpg'

const images = [
  image,
  image,
  image,
  image,
  image,
  image,
  image,
];
const Explore = () => {
  return (
    <div className='bg-black w-full min-h-[100vh] flex'>
        <Sidebar/>
        <div className="w-[75vw] ml-auto p-6 min-h-screen bg-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Explore</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <img src={src} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute cursor-pointer inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="text-white text-lg font-bold">Image {index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Explore