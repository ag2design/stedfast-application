import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { supabase } from '../../lib/supabase';
    import toast from 'react-hot-toast';

    function SignUp() {
      const navigate = useNavigate();
      const [loading, setLoading] = useState(false);
      
      const [formData, setFormData] = useState({
        // Organization details
        organizationName: '',
        organizationAddress: '',
        organizationPhone: '',
        
        // Admin user details
        adminName: '',
        adminEmail: '',
        adminPhone: '',
        password: '',
        confirmPassword: ''
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
        
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match');
          return;
        }

        try {
          setLoading(true);

          // 1. Create the organization
          const { data: orgData, error: orgError } = await supabase
            .from('organizations')
            .insert([
              {
                name: formData.organizationName,
                address: formData.organizationAddress,
                phone_number: formData.organizationPhone
              }
            ])
            .select()
            .single();

          if (orgError) throw orgError;

          // 2. Sign up the user with Supabase Auth
          const { data: authData, error: authError } = await supabase.auth.signUp({
            email: formData.adminEmail,
            password: formData.password,
            options: {
              data: {
                full_name: formData.adminName,
                organization_id: orgData.id
              }
            }
          });

          if (authError) throw authError;

          // 3. Create the user profile
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([
              {
                id: authData.user.id,
                full_name: formData.adminName,
                phone_number: formData.adminPhone,
                organization_id: orgData.id,
                role: 'admin'
              }
            ]);

          if (profileError) throw profileError;

          toast.success('Sign up successful! Please check your email for verification.');
          navigate('/signup-success');

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
              Register your organization
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Organization Details Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Organization Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      required
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <textarea
                      name="organizationAddress"
                      required
                      value={formData.organizationAddress}
                      onChange={handleChange}
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="organizationPhone"
                      required
                      value={formData.organizationPhone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                {/* Admin User Details Section */}
                <div className="space-y-4 pt-6">
                  <h3 className="text-lg font-medium text-gray-900">Admin User Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="adminName"
                      required
                      value={formData.adminName}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="adminEmail"
                      required
                      value={formData.adminEmail}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="adminPhone"
                      required
                      value={formData.adminPhone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }

    export default SignUp;
