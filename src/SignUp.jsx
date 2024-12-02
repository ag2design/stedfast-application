import React from 'react';
    import './index.css';

    function SignUp() {
      return (
        <div className="container mx-auto my-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Organization Sign Up</h1>
          <form className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Organization Name</label>
              <input type="text" placeholder="Organization Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Sign Up
            </button>
          </form>
        </div>
      );
    }

    export default SignUp;
