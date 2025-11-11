
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import './styles/global.css';
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<div>About Page</div>} />
    </Routes>
    </>
  )
}

export default App
