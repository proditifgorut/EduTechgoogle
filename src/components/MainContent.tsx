import React from 'react';
import LeftSidebar from './LeftSidebar';
import FeatureGrid from './FeatureGrid';

const MainContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left">
          A full-stack education
          <br />
          technology solution
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-3">
            <LeftSidebar />
          </div>
          <div className="lg:col-span-9">
            <div className="bg-blue-600 text-white px-6 py-2 rounded-t-xl font-semibold">
              Experience: Collaboration and productivity
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-b-xl p-4 sm:p-6">
              <FeatureGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
