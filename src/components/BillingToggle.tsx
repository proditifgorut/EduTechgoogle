import React from 'react';

interface BillingToggleProps {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ isYearly, setIsYearly }) => {
  return (
    <div className="inline-flex items-center justify-center bg-slate-800/80 border border-white/10 rounded-full p-1">
      <button
        onClick={() => setIsYearly(false)}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
          !isYearly ? 'bg-blue-600 text-white shadow-md' : 'text-gray-300 hover:text-white'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setIsYearly(true)}
        className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
          isYearly ? 'bg-blue-600 text-white shadow-md' : 'text-gray-300 hover:text-white'
        }`}
      >
        Yearly
        {isYearly && (
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            Save 20%
          </span>
        )}
      </button>
    </div>
  );
};

export default BillingToggle;
