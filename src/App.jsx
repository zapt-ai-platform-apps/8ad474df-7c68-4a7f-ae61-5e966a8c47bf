import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MarketingPage from './pages/MarketingPage';
import StifinPage from './pages/StifinPage';
import SpiritualPage from './pages/SpiritualPage';
import ProductivityPage from './pages/ProductivityPage';
import MemoryPage from './pages/MemoryPage';
import SalesPage from './pages/SalesPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pemasaran" element={<MarketingPage />} />
            <Route path="/stifin" element={<StifinPage />} />
            <Route path="/spiritual" element={<SpiritualPage />} />
            <Route path="/produktivitas" element={<ProductivityPage />} />
            <Route path="/daya-ingat" element={<MemoryPage />} />
            <Route path="/penjualan" element={<SalesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}