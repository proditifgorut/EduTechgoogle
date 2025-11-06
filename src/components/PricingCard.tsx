import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PricingCardProps {
  name: string;
  description: string;
  price: number | null;
  billingCycle: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
  isEnterprise: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  billingCycle,
  features,
  isPopular,
  buttonText,
  isEnterprise,
}) => {
  const cardClasses = `relative flex flex-col h-full bg-white/5 backdrop-blur-lg border rounded-2xl p-8 transition-all duration-300 ${
    isPopular ? 'border-blue-500 shadow-2xl shadow-blue-600/20' : 'border-white/10 hover:border-white/20'
  }`;

  const buttonClasses = `w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 mt-auto ${
    isPopular
      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/50'
      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
  }`;

  return (
    <div className={cardClasses}>
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
            Most Popular
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm mb-6 h-10">{description}</p>

      <div className="mb-8">
        {isEnterprise ? (
          <p className="text-3xl font-bold text-white">Custom</p>
        ) : (
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-gray-400 ml-2 text-sm">/ {billingCycle}</span>
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle size={20} className={`flex-shrink-0 mt-0.5 ${isPopular ? 'text-blue-400' : 'text-green-400'}`} />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={buttonClasses}>{buttonText}</button>
    </div>
  );
};

export default PricingCard;
