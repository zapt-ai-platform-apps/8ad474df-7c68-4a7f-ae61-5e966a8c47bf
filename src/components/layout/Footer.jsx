import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Asisten Sukses Terintegrasi</h3>
            <p className="text-slate-400 text-sm">
              Pendamping holistik Anda untuk mencapai kesuksesan dalam berbagai aspek kehidupan, 
              termasuk bisnis, pengembangan diri, dan spiritualitas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Modul</h3>
            <ul className="space-y-2">
              <li><Link to="/pemasaran" className="text-slate-400 hover:text-white text-sm">Pemasaran & Periklanan</Link></li>
              <li><Link to="/stifin" className="text-slate-400 hover:text-white text-sm">Pengembangan Diri (STIFIn)</Link></li>
              <li><Link to="/spiritual" className="text-slate-400 hover:text-white text-sm">Spiritual & Mental</Link></li>
              <li><Link to="/produktivitas" className="text-slate-400 hover:text-white text-sm">Aksi & Produktivitas</Link></li>
              <li><Link to="/daya-ingat" className="text-slate-400 hover:text-white text-sm">Peningkatan Daya Ingat</Link></li>
              <li><Link to="/penjualan" className="text-slate-400 hover:text-white text-sm">Strategi Penjualan</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <p className="text-slate-400 text-sm">Butuh bantuan atau punya pertanyaan?</p>
              <p className="text-slate-400 text-sm mt-2">Kirim email ke: info@asistensukes.co.id</p>
            </div>
            <a 
              href="https://www.zapt.ai"
              target="_blank" 
              rel="noopener noreferrer"
              className="made-on-zapt mt-4"
            >
              Made on ZAPT
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-slate-700 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Asisten Sukses Terintegrasi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}