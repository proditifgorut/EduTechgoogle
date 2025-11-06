import React from 'react';
import { BrainCircuit, FilePieChart, Shield } from 'lucide-react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className={`p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group ${color}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-700/50 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">{title}</h3>
          <p className="text-gray-300 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

const LeftSidebar: React.FC = () => {
  const cards = [
    {
      icon: <BrainCircuit size={24} className="text-blue-400" />,
      title: 'Empower',
      description: 'Empower your faculty, staff, and students with intuitive tools.',
      color: 'hover:border-blue-500/50'
    },
    {
      icon: <FilePieChart size={24} className="text-red-400" />,
      title: 'Optimize',
      description: 'Optimize your tech with data insights and simple management.',
      color: 'hover:border-red-500/50'
    },
    {
      icon: <Shield size={24} className="text-green-400" />,
      title: 'Protect',
      description: 'Protect your data with secure, scalable, and compliant infrastructure.',
      color: 'hover:border-green-500/50'
    },
  ];

  return (
    <div className="space-y-6">
      {cards.map((card, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default LeftSidebar;
