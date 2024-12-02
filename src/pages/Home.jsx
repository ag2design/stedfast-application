import React from 'react';
    import { Link } from 'react-router-dom';

    function Home() {
      return (
        <div className="bg-white">
          {/* Navigation */}
          <header className="absolute inset-x-0 top-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold text-gray-900">Stedfast</span>
                </Link>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/features" className="text-sm font-semibold leading-6 text-gray-900">Features</Link>
                <Link to="/pricing" className="text-sm font-semibold leading-6 text-gray-900">Pricing</Link>
                <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">About</Link>
                <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">Contact</Link>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
                <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500"
                >
                  Sign up
                </Link>
              </div>
            </nav>
          </header>

          {/* Hero Section */}
          <div className="relative">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                    Quality Assurance for Modern Training
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Streamline your vocational training operations, ensure compliance, and deliver exceptional learning experiences with our comprehensive QA platform.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      to="/signup"
                      className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500"
                    >
                      Get started
                    </Link>
                    <Link to="/demo" className="text-sm font-semibold leading-6 text-gray-900">
                      Live demo <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <img
                  className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80"
                  alt="IT Training Session"
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-purple-600">Faster Quality Assurance</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Everything you need to manage training quality
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Streamline your quality assurance processes with our comprehensive suite of tools designed specifically for vocational training providers.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                  {[
                    {
                      title: 'Quality Assurance',
                      description: 'Comprehensive tools to maintain and improve training standards with automated workflows.',
                      icon: (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Team Management',
                      description: 'Efficiently manage your training team, assign roles, and track performance metrics.',
                      icon: (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      ),
                    },
                    {
                      title: 'Analytics & Reporting',
                      description: 'Generate detailed reports and gain insights into your training programs.',
                      icon: (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      ),
                    },
                  ].map((feature) => (
                    <div key={feature.title} className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600">
                          {feature.icon}
                        </div>
                        {feature.title}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                        <p className="flex-auto">{feature.description}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to transform your training?
                    <br />
                    Get started today.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Join hundreds of training providers who have already improved their quality assurance processes.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <Link
                      to="/signup"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                    >
                      Get started
                    </Link>
                    <Link to="/contact" className="text-sm font-semibold leading-6 text-white">
                      Contact sales <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Home;
