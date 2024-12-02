import React from 'react';
    import MainNav from '../components/MainNav';
    import { Link } from 'react-router-dom';

    function Home() {
      return (
        <div className="min-h-screen">
          <MainNav />
          
          {/* Hero Section */}
          <div className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                alt="Training Session"
              />
              <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
            </div>

            {/* Hero Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
                  Modern Quality Assurance for Vocational Training
                </h1>
                <p className="mt-6 text-xl text-gray-200 max-w-2xl">
                  Streamline your training operations, ensure compliance, and deliver exceptional learning experiences with Stedfast's comprehensive QA platform.
                </p>
                <div className="mt-10 flex gap-4">
                  <Link to="/signup" className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Get Started
                  </Link>
                  <Link to="/demo" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Why Choose Stedfast?
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  Everything you need to manage quality assurance in vocational training.
                </p>
              </div>

              <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Feature 1 */}
                <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-purple-600 p-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Quality Assurance</h3>
                  <p className="mt-4 text-gray-600 text-center">
                    Comprehensive tools to maintain and improve training standards.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-purple-600 p-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Organization Management</h3>
                  <p className="mt-4 text-gray-600 text-center">
                    Efficiently manage multiple organizations and training programs.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-purple-600 p-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-8 text-xl font-medium text-gray-900 text-center">Analytics & Reporting</h3>
                  <p className="mt-4 text-gray-600 text-center">
                    Detailed insights and reports to track performance and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-purple-600">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block text-purple-200">Start your free trial today.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link to="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50">
                    Get started
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Home;
