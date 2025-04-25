import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Pemasaran', href: '/pemasaran' },
  { name: 'STIFIn', href: '/stifin' },
  { name: 'Spiritual', href: '/spiritual' },
  { name: 'Produktivitas', href: '/produktivitas' },
  { name: 'Daya Ingat', href: '/daya-ingat' },
  { name: 'Penjualan', href: '/penjualan' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-indigo-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            Asisten Sukses
          </Link>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              to={item.href}
              className={`hover:text-indigo-200 transition-colors ${
                location.pathname === item.href ? 'text-white font-semibold' : 'text-indigo-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="p-2 text-indigo-100 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 px-4 py-3">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === item.href 
                    ? 'bg-indigo-800 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}