import React from 'react';

    function Dashboard() {
      return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Card 1 */}
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Recent Activity</h2>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm">New organization registered: Tech Training Ltd</p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm">Quality assessment completed: Advanced Web Development</p>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm">New course added: Cloud Computing Fundamentals</p>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Statistics</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-purple-600 text-sm font-semibold">Total Organizations</h3>
                    <p className="text-2xl font-bold text-purple-800">24</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-blue-600 text-sm font-semibold">Active Courses</h3>
                    <p className="text-2xl font-bold text-blue-800">156</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-green-600 text-sm font-semibold">Completed Assessments</h3>
                    <p className="text-2xl font-bold text-green-800">892</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-yellow-600 text-sm font-semibold">Pending Reviews</h3>
                    <p className="text-2xl font-bold text-yellow-800">15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Dashboard;
