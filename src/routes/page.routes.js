import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import TechBuddy from '../components/TechBuddy';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';

const Approutes = () => 
{
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/TechBuddy" element={<TechBuddy />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Approutes;
