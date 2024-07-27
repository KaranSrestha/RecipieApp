import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Post from '../Post'

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