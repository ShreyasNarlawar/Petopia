import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home'; // Home component
import Login from './Component/Register-Login/Login';
import Register from './Component/Register-Login/Register';
import Adopt from './Component/Adopt/Adopt'; // Adopt component
import Donate from './Component/Donate/Donate'; // Donate component
import AboutUs from './Component/AboutUs/AboutUs'; // About Us component
import Blog from './Component/Blog/Blog'; // Blog component
import FAQ from './Component/FAQ/FAQ'; // FAQ component
import Terms from './Component/Terms/Terms'; // Terms of Service component
import Footer from './Component/Footer/Footer'; // Footer component
import NotFound from './Component/NotFound/NotFound'; // 404 Not Found component
import Stats from './Component/Stats/Stats'; 
import './App.css'; 

const App = () => {
  return (
    <Router> 
      <div className="app-container"> 
        <NavBar /> 
        <main> {/* Wrap the Routes within a <main> tag */}
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/aboutUs" element={<AboutUs />} /> 
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </main>
       
      </div>
    </Router>
  );
};

export default App;