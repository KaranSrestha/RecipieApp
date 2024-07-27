import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login/Login'
=======
import Home from './Pages/Home'
import Login from './Pages/Login/Login'
>>>>>>> 0b41a40642b8810ea32a0bb5557b7a66d17948b8

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
