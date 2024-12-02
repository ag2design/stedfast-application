import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    function MainNav() {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <nav className="absolute top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-white font-bold text-2xl">Stedfast</Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <Link to="/about" className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                  <Link to="/services" className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                  <Link to="/contact" className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                  <Link to="/login" className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium ml-4">Login</Link>
                  <Link to="/signup" className="bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium">Sign Up</Link>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="text-gray-800 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/about" className="text-gray-800 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                <Link to="/services" className="text-gray-800 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                <Link to="/contact" className="text-gray-800 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                <Link to="/login" className="bg-purple-600 text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link to="/signup" className="bg-white text-purple-600 border border-purple-600 hover:bg-purple-50 block px-3 py-2 rounded-md text-base font-medium mt-2">Sign Up</Link>
              </div>
            </div>
          )}
        </nav>
      );
    }

    export default MainNav;
