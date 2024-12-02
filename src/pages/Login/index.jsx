import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { supabase } from '../../lib/supabase';
    import toast from 'react-hot-toast';

    function Login() {
      const navigate = useNavigate();
      const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          setLoading(true);
          
          const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          });

          if (error) throw error;

          // Get user profile and organization data
          const { data: profile } = await supabase
            .from('profiles')
            .select(`
              *,
              organizations (
                name,
                address,
                phone_number
              )
            `)
            .eq('id', data.user.id)
            .single();

          if (profile) {
            toast.success(`Welcome back, ${profile.full_name}!`);
          }

          navigate('/dashboard');
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };

      const handleForgotPassword = async () => {
        if (!formData.email) {
          toast.error('Please enter your email address');
          return;
        }

        try {
          setLoading(true);
          const { error } = await supabase.auth.resetPasswordForEmail(formData.email);
          if (error) throw error;
          toast.success('Password reset instructions sent to your email');
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                register your organization
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm font-medium text-purple-600 hover:text-purple-500"
                  >
                    Forgot your password?
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Need help?</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-purple-600 hover:text-purple-500"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Login;
