
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import './styles/global.css';
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<div>Dashboard Page</div>} />
    </Routes>
    </>
  )
}

export default App
