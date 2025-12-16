import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from './pages/Services';
import Blog from './pages/Blog';
import Banner from './components/Banner';
import Footer  from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar visible on all pages */}
      <Navbar />
     

      {/* Page Routes */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
            <Footer/>

    </div>

  )
}

export default App
