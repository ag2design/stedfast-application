import React from 'react';
    import { Link } from 'react-router-dom';

    function SignUpSuccess() {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Registration Successful!
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Please check your email to verify your account. Once verified, you can log in to your dashboard.
                </p>
                <div className="mt-6">
                  <Link
                    to="/login"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Go to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default SignUpSuccess;
