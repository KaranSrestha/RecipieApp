import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import Login from './Pages/Login/Login'
import Explore from './Pages/Explore'
import Home from './Pages/Home'
=======
import Home from './Pages/Home'
import Login from './Pages/Login/Login'
>>>>>>> sidebranch

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
