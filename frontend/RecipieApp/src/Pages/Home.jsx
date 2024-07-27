import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Post from '../Components/Post'
import Suggestion from '../Components/Suggestion'

const Home = () => {
  return (
    <div className='bg-black'>
        <Sidebar/>
        <Post/>
        <Post/>
        <Post/>
        <Suggestion/>
    </div>
  )
}

export default Home