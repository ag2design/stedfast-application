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
                {/* Add content here */}
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Statistics</h2>
                {/* Add content here */}
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Dashboard;
