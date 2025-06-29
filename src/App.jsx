import { Routes, Route } from 'react-router-dom';
import SupportSection from './components/SupportSection';
import Navbar from './components/Navbar';
import KitSection from './components/KitSection';

import AppIntro from './components/AppIntro';

import About from './components/About';

import React from 'react';
import Hero from './components/hero';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CertificateDemo from './components/CertificateDemo';
import InclusiveKit from './components/InclusiveKit';
import MobileApp from './pages/MobileApp';
import SmartAgriKitPage from './pages/SmartAgriKitPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <About />
            <SupportSection />
            <AppIntro />
            <KitSection />
            <InclusiveKit />
            <CertificateDemo />
            <FAQ />
            <Footer />
          </>
        }
      />
      <Route path="/mobil-uygulama" element={<MobileApp />} />
      <Route path="/agriculture-kit" element={<SmartAgriKitPage />} />
    </Routes>
  );
}

export default App;