import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';

const Approutes = () => 
{
  const location = useLocation();

  return (
    <div className="app-layout">
      <Header />

      <main className="app-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};


export default Approutes;
