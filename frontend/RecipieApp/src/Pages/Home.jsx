import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Post from '../Components/Post'

const Home = () => {
  return (
    <div className='bg-black'>
        <Sidebar/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Home