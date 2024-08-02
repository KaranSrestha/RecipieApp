import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Explore from "./Pages/Explore";
import Signup from "./Pages/Signup";
import ProtectedRoute from './Components/ProtectedRoute';  // Adjust the path as necessary

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute element={Home} />} />
          <Route path="/explore" element={<ProtectedRoute element={Explore} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
