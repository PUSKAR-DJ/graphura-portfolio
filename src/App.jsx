import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Calendar from "./pages/Calendar";
import "./styles/style.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/branding" element={<Navigate to="/services/branding" replace />} />
          <Route path="/terms" element={<div className="container section"><h1>Terms of Service</h1><p>Coming Soon...</p></div>} />
          <Route path="/cookies" element={<div className="container section"><h1>Cookie Policy</h1><p>Coming Soon...</p></div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
