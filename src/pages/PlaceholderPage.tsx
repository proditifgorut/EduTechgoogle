import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PlaceholderPage: React.FC = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replace(/-/g, ' ');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-5xl font-bold capitalize mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {pageName || 'Page Not Found'}
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        {pageName ? `This page is under construction. Content for ${pageName} will be available soon.` : 'The page you are looking for does not exist.'}
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/50"
      >
        <ArrowLeft size={20} />
        Return to Home
      </Link>
    </div>
  );
};

export default PlaceholderPage;
