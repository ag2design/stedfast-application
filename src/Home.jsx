import React from 'react';
    import './index.css';

    function Home() {
      return (
        <div>
          <section id="showcase" className="bg-gray-800 text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Modern Quality Assurance for Vocational Training</h1>
              <p className="text-xl mb-8">Manage your organizations and billing with ease.</p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </section>

          <section id="newsletter" className="bg-gray-700 text-white py-10">
            <div className="container mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">Subscribe To Our Newsletter</h1>
              <form className="flex justify-center items-center">
                <input type="email" placeholder="Enter Email..." className="p-2 w-64 border-none rounded-l" />
                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r">
                  Subscribe
                </button>
              </form>
            </div>
          </section>

          <section id="boxes" className="py-20">
            <div className="container mx-auto flex justify-between">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/3 mx-4">
                <img src="https://via.placeholder.com/100" alt="Organization Management" className="w-20 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Organization Management</h3>
                <p className="text-gray-600">Effortlessly manage multiple organizations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/3 mx-4">
                <img src="https://via.placeholder.com/100" alt="Billing Management" className="w-20 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Billing Management</h3>
                <p className="text-gray-600">Streamline your billing processes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/3 mx-4">
                <img src="https://via.placeholder.com/100" alt="Quality Assurance" className="w-20 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Ensure high standards in vocational training.</p>
              </div>
            </div>
          </section>

          <footer className="bg-gray-800 text-white text-center py-6">
            <p>Stedfast, Copyright &copy; 2023</p>
          </footer>
        </div>
      );
    }

    export default Home;
