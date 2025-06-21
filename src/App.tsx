import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCursor } from './hooks/useCursor';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Cursor from './components/ui/Cursor';

function App() {
  const { cursorRef } = useCursor();
  useSmoothScroll();

  return (
    <Router>
      <div className="font-sans text-white bg-primary min-h-screen overflow-x-hidden">
        <Cursor ref={cursorRef} />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;