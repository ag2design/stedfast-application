import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    function MainNav() {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-gray-900">Stedfast</span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setIsOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/features" className="text-sm font-semibold leading-6 text-gray-900">
                Features
              </Link>
              <Link to="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
                Pricing
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                About
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
              <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                Log in
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Sign up
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-50"></div>
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="text-2xl font-bold text-gray-900">Stedfast</span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link
                        to="/features"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Features
                      </Link>
                      <Link
                        to="/pricing"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Pricing
                      </Link>
                      <Link
                        to="/about"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Contact
                      </Link>
                    </div>
                    <div className="py-6">
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </Link>
                      <Link
                        to="/signup"
                        className="mt-4 block rounded-md bg-purple-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      );
    }

    export default MainNav;