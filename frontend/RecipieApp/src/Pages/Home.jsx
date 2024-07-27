import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Post from '../Components/Post'
import Suggestion from '../Components/Suggestion'

const Home = () => {
  return (
    <div className='bg-black flex flex-col gap-[20px] pt-8 h-110%'>
        <Sidebar />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Suggestion/>
    </div>
  )
}

export default Home