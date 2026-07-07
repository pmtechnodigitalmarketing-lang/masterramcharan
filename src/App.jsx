import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import FindUs from './pages/FindUs';
import StateServices from './pages/StateServices';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetails />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="insights" element={<Insights />} />
          <Route path="find-us" element={<FindUs />} />
          <Route path="location/:stateId" element={<StateServices />} />
          {/* Fallback 404 can just go to home for now, or build a quick 404 */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '10rem 0' }}>
              <h1 style={{ fontSize: '6rem', color: 'var(--color-indigo)' }}>404</h1>
              <h2>Cosmic Misalignment</h2>
              <p>The page you are looking for does not exist in this timeline.</p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
